import EditSingleRow from "./MealRow";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function editmealTable({ meal }) {
  const dispatch = useDispatch();
  console.log("meal is", meal);

  const [mealName, setMealName] = useState(meal.meal_name);
  const [mealType, setMealType] = useState(meal.meal_type);
  const [totalMealCarbs, setTotalMealCarbs] = useState(meal.carbs);
  const mealId = meal.id;
  const user = useSelector((store) => store.user.id);

  const updateMeal = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_MEAL",
      payload: {
        mealId,
        mealName,
        // mealType,
        // totalMealCarbs,
      },
    });
  };

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
            value={mealName}
            onChange={(e) => {
              setMealName(e.target.value);
            }}
          />
        </td>
        <td>
          <select
            name="type"
            id="mealType"
            value={mealType}
            onChange={(e) => {
              setMealType(e.target.value);
            }}
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
            placeholder="enter total carbs"
            value={totalMealCarbs}
            onChange={(e) => {
              setTotalMealCarbs(Number(e.target.value));
            }}
          />
        </td>
        <td>
          <button onClick={updateMeal}>Save</button>
        </td>
      </tr>
    </>
  );
}

export default editmealTable;
