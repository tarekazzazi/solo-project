import "./Styles/MealPlan.css";
import "./MealPlanDetail";
import Calender from "./Calander";
import MealRow from "./ToggleEditMeal/MealRow";
import MealForm from "./MealForm";
import CarbCalculate from "./Calculate/CarbCalculate";
// import MealPlanDetail from "./MealPlanDetail";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function MealPlan() {
  const dispatch = useDispatch();
  const meals = useSelector((store) => store.meal);
  const dateArray = useSelector((store) =>
    store.meal.map((meal) => {
      return meal.date;
    })
  );
  // const result = dateArray.filter((date) => date.length > 6);

  // console.log("new ordered dates", result);
  console.log("Array of dates", dateArray);

  console.log("the meals are", meals);
  useEffect(() => {
    console.log("In use Effect");

    dispatch({
      type: "FETCH_MEAL",
    });
  }, []);

  return (
    <div className="container">
      <h2>Weekly Meal Plan</h2>

      <div className="navBar2">
        <FaArrowAltCircleLeft />
        <label htmlFor="date"> Week of:</label>
        <div className="date">
          <Calender />
        </div>

        <label>
          Max Carb Intake: <CarbCalculate />{" "}
        </label>
        <FaArrowCircleRight />
      </div>

      {/* //////////////////MEAL TABLE/////////////////////////// */}
      <div className="mealTableContainer">
        <form>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Meal</th>
                <th>Type</th>
                <th>Carbs</th>
                <th>Blood sugar level</th>
                <th>Notes</th>
                <th> </th>
              </tr>
            </thead>

            <tbody className="mealBody">
              {meals &&
                meals.map((meal) => {
                  return <MealRow key={meal.id} meal={meal} />;
                })}
              {/* <MealPlanDetail /> */}
            </tbody>
          </table>
        </form>
      </div>
      {/* ////////////////////////END OF MEAL TABLE?//////////////////////////// */}

      {/* ////////////////Add A New Meal Form////////////////////////////////// */}
      <MealForm />
    </div>
  );
}

export default MealPlan;
