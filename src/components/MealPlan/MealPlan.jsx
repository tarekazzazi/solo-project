import "./Styles/MealPlan.css";
import "./MealPlanDetail";
import Calender from "./Calander";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MealForm from "./MealForm";

function MealPlan() {
  const dispatch = useDispatch();
  const meals = useSelector((store) => store.meal);

  console.log("the meals are", meals);
  useEffect(() => {
    console.log("In use Effect");

    dispatch({
      type: "FETCH_MEAL",
    });
  }, []);
  return (
    <div className="container">
      <p>Meal planner</p>

      <div className="navBar2">
        <FaArrowAltCircleLeft />
        <label htmlFor="date"> Week of:</label>
        <div className="date">
          <Calender />
        </div>

        <label>Max Carb Intake: 210/GMs </label>
        <FaArrowCircleRight />
      </div>

      {/* //////////////////MEAL TABLE/////////////////////////// */}
      <div className="mealTableContainer">
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
                return (
                  <tr key={meal.id}>
                    <th>{meal.date}</th>

                    <td className="tableCell">{meal.meal_name}</td>
                    <td className="tableCell">{meal.meal_type}</td>
                    <td className="tableCell">{meal.carbs}</td>
                    <td className="tableCell">{meal.blood_sugar_lvl}</td>
                    <td className="tableCell">{meal.notes}</td>
                    <td>
                      <input type="checkbox" />
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* ////////////////////////END OF MEAL TABLE?//////////////////////////// */}

      {/* ////////////////Add A New Meal Form////////////////////////////////// */}
      <MealForm />
    </div>
  );
}

export default MealPlan;
