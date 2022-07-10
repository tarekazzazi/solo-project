import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function ReadOnlyRow({ meal }) {
  const dispatch = useDispatch();

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
      <th>{meal.date}</th>

      <td className="tableCell">{meal.meal_name}</td>
      <td className="tableCell">{meal.meal_type}</td>
      <td className="tableCell">{meal.carbs}</td>
      <td className="tableCell">{meal.blood_sugar_lvl}</td>
      <td className="tableCell">{meal.notes}</td>
      <td>
        <input type="checkbox" />
        <Link to="/EditDetail">
          <button>Edit</button>
        </Link>
        <button onClick={() => deleteMealTableRow(meal.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;
