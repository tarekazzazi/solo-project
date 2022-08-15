import React from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import moment from "moment";
import "./UserPage.css";
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  // const user = useSelector((store) => store.user);
  // const bloodsugar = useSelector((store) => store.meal.blood_sugar_lvl);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b2102f",
      },
    },
  });

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
    currendate.setDate(17);

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
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "2em",
          }}
        >
          <div className="container">
            <Card
              elevation={4}
              sx={{
                padding: "2em",
                margin: "2em",
              }}
            >
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
                          130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
                          130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
                          130, 130,
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
            </Card>
            {/* <LogOutButton className="btn" /> */}
          </div>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
