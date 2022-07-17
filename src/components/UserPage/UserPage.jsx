import React from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import moment from "moment";
import "./UserPage.css";
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  // const user = useSelector((store) => store.user);
  // const bloodsugar = useSelector((store) => store.meal.blood_sugar_lvl);

  function addDays(date, days) {
    // Calculates new date here
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    // console.log(result);
    const mealdate = result;

    return mealdate;
  }
  const user = useSelector((store) => store.user);
  const bloodsugar = useSelector((store) => store.meal.blood_sugar_lvl);

  const blood = useSelector((store) =>
    store.meal.map((meal) => {
      return meal.blood_sugar_lvl;
    })
  );

  console.log("blood is ", blood);

  useEffect(() => {
    console.log("In use Effect");
    const currendate = new Date();
    currendate.setDate(9);

    console.log(
      "in meal page useEffect",
      moment(currendate).format("MM-DD-YYYY")
    );

    const startDate = moment(currendate).format("MM-DD-YYYY");

    const endDate = moment(addDays(new Date(startDate), 7)).format(
      "MM-DD-YYYY"
    );
    console.log(moment(endDate).format("MM-DD-YYYY"));

    dispatch({
      type: "FETCH_MEAL",
      payload: {
        startDate,
        endDate,
      },
    });
  }, []);
  console.log(bloodsugar);
  // bloodsugar ?
  // console.log('blood sugar is', bloodsugar )
  // :
  // console.log('Not defined');
  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>
      <div className="Chart">
        <Line
          data={{
            labels: [
              "MON",
              "",
              "",
              "TUES",
              "",
              "",
              "WED",
              "",
              "",
              "THURS",
              "",
              "",
              "FRI",
              "",
              "",
              "SAT",
              "",
              "",
              "SUN",
              "",
              "",
            ],
            datasets: [
              {
                label: "My blood sugar lvl",
                data: blood,
                fill: false,
                borderColor: "red",
                lineTension: 0.1,
              },
              {
                label: "Average blood suagr lvl",
                data: [
                  140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140,
                  140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140,
                ],
                fill: true,
                borderColor: "grey",
                lineTension: 0.1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            responsive: false,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Weekly Blood Sugar Tracking",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 50,
                    max: 300,
                  },
                },
              ],
            },
          }}
        />
      </div>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
