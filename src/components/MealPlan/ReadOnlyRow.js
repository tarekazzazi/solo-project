import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function ReadOnlyRow({ meal, toggleEdit }) {
  const dispatch = useDispatch();

  const editMeal = () => {
    toggleEdit();
  };

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
      <td>{meal.date}</td>

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
