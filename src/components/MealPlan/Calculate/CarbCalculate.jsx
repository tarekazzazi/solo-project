import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function CalculateWeeklyTotalCarbs() {
  const dispatch = useDispatch();
  const totalCarbs = useSelector((store) => store.user);
  const mealCarbs = useSelector((store) =>
    store.meal.map((meal) => {
      return meal.carbs;
    })
  );

  console.log(totalCarbs.max_carbs);

  console.log(mealCarbs);

  dispatch({
    type: "CALCULATE_WEEKLY_CARBS",
    payload: {
      totalCarbs: totalCarbs.max_carbs,
      arrayOfMealCarbs: mealCarbs,
    },
  });

  return (
    <>
      <h4>Made it to Calculate weekly Carbs</h4>
    </>
  );
}

export default CalculateWeeklyTotalCarbs;
