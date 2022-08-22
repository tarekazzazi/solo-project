import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "@mui/material/Button";

function editmealTable({ meal, toggleEdit }) {
  // Passing in meal Obj prop
  // set meal obj data to default value on Inputs
  const dispatch = useDispatch();
  const dates = useSelector((store) => store.date);

  const [mealName, setMealName] = useState(meal.meal_name);
  const [mealType, setMealType] = useState(meal.meal_type);
  const [totalMealCarbs, setTotalMealCarbs] = useState(meal.carbs);
  const [bloodSugarLvl, setBloodSugarLvl] = useState(0);
  const mealId = meal.id;

  const updateMeal = () => {
    toggleEdit();
    dispatch({
      type: "UPDATE_MEAL",
      payload: {
        mealId,
        mealName,
        mealType,
        totalMealCarbs,
        bloodSugarLvl,
        startDate: dates.startDate,
        endDate: dates.endDate,
      },
    });
  };

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
          <input
            id="bloodSugarLvl"
            type="number"
            min="0"
            name="bloodSugarLvl"
            placeholder=" enter blood sugar lvl"
            value={bloodSugarLvl}
            onChange={(e) => {
              setBloodSugarLvl(Number(e.target.value));
            }}
          />
        </td>
        <td>
          <Button onClick={updateMeal}>Save</Button>
        </td>
      </tr>
    </>
  );
}

export default editmealTable;
