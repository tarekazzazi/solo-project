import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function CalculateWeeklyTotalCarbs() {
  const Swal = require("sweetalert2");
  const totalCarbs = useSelector((store) => store.user);
  const mealCarbs = useSelector((store) =>
    store.meal.map((meal) => {
      return meal.carbs;
    })
  );

  const carbTotal = totalCarbs.max_carbs;
  const ArrayOfCarbs = mealCarbs;

  console.log("array", ArrayOfCarbs);
  console.log("running total", carbTotal);
  let sum = ArrayOfCarbs.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (sum > carbTotal) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Woah slow down there partner your over the carb limit",
    });
  }
  console.log("the sum is", sum);
  return (
    <>
      <h4 id="liveTotal">weekly Carbs: {sum}</h4>
    </>
  );
}

export default CalculateWeeklyTotalCarbs;
