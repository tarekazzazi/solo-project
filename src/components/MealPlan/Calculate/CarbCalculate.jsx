import React from "react";
import { useSelector } from "react-redux";

function CalculateWeeklyTotalCarbs() {
  const Swal = require("sweetalert2");
  const totalCarbs = useSelector((store) => store.user);
  const mealCarbs = useSelector((store) =>
    store.meal.map((meal) => {
      if (totalCarbs.id === meal.user_id) {
        return meal.carbs;
      } else {
        return 0;
      }
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
      text: "your over the weekly carb limit",
    });
  } else {
  }
  console.log("the sum is", sum);
  return (
    <>
      <h4 id="liveTotal">weekly carb limit: {sum}</h4>
    </>
  );
}

export default CalculateWeeklyTotalCarbs;
