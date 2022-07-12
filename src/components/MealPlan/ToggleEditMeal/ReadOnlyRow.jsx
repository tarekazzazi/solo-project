import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function ReadOnlyRow({ meal, toggleEdit }) {
  const dispatch = useDispatch();
  // on edit button click run function toggleEdit
  const editMeal = () => {
    toggleEdit();
  };
  // passes in meal.id
  // dispatchs meal.id as mealId to mealSaga
  const deleteMealTableRow = (id) => {
    console.log("Hello", id);

    dispatch({
      type: "DELETE_MEAL",
      payload: {
        mealId: id,
      },
    });
  };

  return (
    <tr key={meal.id}>
      <td>{moment(meal.date).format("MM-DD-YYYY")}</td>

      <td className="tableCell">{meal.meal_name}</td>
      <td className="tableCell">{meal.meal_type}</td>
      <td className="tableCell">{meal.carbs}</td>
      <td className="tableCell">{meal.blood_sugar_lvl}</td>
      <td className="tableCell">{meal.notes}</td>
      <td>
        <input type="checkbox" />

        <button onClick={editMeal}>Edit</button>

        <button onClick={() => deleteMealTableRow(meal.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;
