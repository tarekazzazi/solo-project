import "./Styles/MealPlan.css";
import "./MealPlanDetail";
import moment from "moment";
import Calender from "./Calander";
import MealRow from "./ToggleEditMeal/MealRow";
import MealForm from "./MealForm";
import CarbCalculate from "./Calculate/CarbCalculate";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function MealPlan() {
  const dispatch = useDispatch();
  const meals = useSelector((store) => store.meal);
  const dateArray = useSelector((store) =>
    store.meal.map((meal) => {
      return moment(meal.date).format("MM-DD-YYYY");
    })
  );

  const orderDates = useSelector((store) => store.date);

  console.log("Array of dates", dateArray);

  console.log("the meals are", meals);

  function addDays(date, days) {
    // Calculates new date here
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    // console.log(result);
    const mealdate = result;

    return mealdate;
  }

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
    // console.log("TEXT", moment(endDate).format("MM-DD-YYYY"));
    console.log("TEXT", startDate, endDate);

    dispatch({
      type: "FETCH_MEAL",
      payload: {
        startDate,
        endDate,
      },
    });

    dispatch({
      type: "ADD_DATE",
      payload: {
        startDate,
        endDate,
      },
    });
  }, []);

  return (
    <div className="container">
      <h2>Weekly Meal Plan</h2>

      <div className="navBar2">
        <label htmlFor="date"> Week of: </label>
        <div className="date">
          <Calender />
        </div>

        <label>
          <CarbCalculate />{" "}
        </label>
      </div>

      {/* //////////////////MEAL TABLE/////////////////////////// */}
      <div className="mealTableContainer">
        <form>
          <Table
            class="mui--align-middle"
            sx={{
              width: "50%",
              align: "middle",
              outerHeight: "50",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Day</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Meal</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Carbs</TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontWeight: 700,
                  }}
                >
                  Blood sugar level
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody className="mealBody">
              {meals &&
                meals.map((meal) => {
                  return <MealRow key={meal.id} meal={meal} />;
                })}
              {/* <MealPlanDetail /> */}
            </TableBody>
          </Table>
        </form>
      </div>
      {/* ////////////////////////END OF MEAL TABLE?//////////////////////////// */}

      {/* ////////////////Add A New Meal Form////////////////////////////////// */}
      <MealForm />
    </div>
  );
}

export default MealPlan;
