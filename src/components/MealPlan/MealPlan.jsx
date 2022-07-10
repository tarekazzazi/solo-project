import "./Styles/MealPlan.css";
import "./MealPlanDetail";
import Calender from "./Calander";
// import EditDetail from "./ToggleEditMeal/EditDetail";
// import ReadOnlyRow from "./ToggleEditMeal/ReadOnlyRow";
import MealRow from "./ToggleEditMeal/MealRow";
import MealForm from "./MealForm";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Fragment } from "react";

function MealPlan() {
  const dispatch = useDispatch();
  const meals = useSelector((store) => store.meal);
  // const [editMeal, setEditMeal] = useState();

  // function toggleEdit() {
  //   setEditMeal(!editMeal);
  // }

  // console.log("edit meal found", editMeal);

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

        <label>Max Carb Intake: 210/GMs </label>
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
                  return (
                    <MealRow key={meal.id} meal={meal} />
                    // <Fragment>
                    //   {editMeal === false ? (
                    //     <EditDetail meal={meal} />
                    //   ) : (
                    //     <ReadOnlyRow meal={meal} toggleEdit={toggleEdit} />
                    //   )}
                    // </Fragment>
                  );
                })}
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
