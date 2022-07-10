import MealForm from "./MealForm";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function editmealTable() {
  const dispatch = useDispatch();
  const meals = useSelector((store) => store.meal);

  // const updateMeal = (tableRow) => {
  //     console.log("tablecelll is", tableRow);

  // dispatch({
  //   type: "UPDATE_MEAL",
  //   payload: {
  //     tableRow,
  //   },
  // });
  //   };

  // function updateMeal({
  //     mealId: meal.id,
  //     meal: meal.meal_name,
  //     type: meal.meal_type,
  //     carbs: meal.carbs,
  //   })
  return (
    <>
      <tr>
        <td></td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a meal name"
            name="mealName"
          />
        </td>
        <td>
          <select
            name="type"
            id="mealType"
            // onChange={(e) => {
            //   setMealType(e.target.value);
            // }}
          >
            <option value="Breakfest">Breakfest</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </td>
        <td>
          <input
            id="total"
            type="number"
            min="0"
            name="carbs"
            // onChange={(e) => {
            //   setTotalCarbs(Number(e.target.value));
            // }}
          />
        </td>
      </tr>
    </>
  );
}

export default editmealTable;
