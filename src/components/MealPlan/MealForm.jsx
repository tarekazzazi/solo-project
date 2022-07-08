import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import currenDate from "./Calander";

function MealForm() {
  console.log("the current date is", currenDate);
  const dispatch = useDispatch();
  const startDate = useSelector((store) => store.date);

  const [selecteDate, setSelectedDate] = useState("");
  const [day, setDayOfWeek] = useState("");
  const [type, setMealType] = useState("Breakfest");
  const [carbs, setTotalCarbs] = useState(0);
  const [meal_name, setMealName] = useState("");

  // checks to see if date === "Monday"
  // startDate is always a Monday of each week
  // If true returns the startDate of the week
  // If Its any other day than monday it adds a day to the start date till it reachs wednesday or thursday or friday etc...
  function renderDate(startDate, day) {
    switch (day) {
      case "Monday":
        return addDays(new Date(startDate), 1); // calculates how many days to add onto start date
      case "Tuesday":
        return addDays(new Date(startDate), 2);
      case "Wednesday":
        return addDays(new Date(startDate), 3);
      case "Thursday":
        return addDays(new Date(startDate), 4);
      case "Friday":
        return addDays(new Date(startDate), 5);
      case "Saturday":
        return addDays(new Date(startDate), 6);
      case "Sunday":
        return addDays(new Date(startDate), 0);
    }
    return;
  }
  function addDays(date, days) {
    // Calculates new date here
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    // console.log(result);
    const mealdate = result;

    return mealdate;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Select date", selecteDate);
    // function addDays(date, days) {

    //     // Calculates new date here
    //     let result = new Date(date);
    //     result.setDate(result.getDate() + days);
    //     // console.log(result);

    //     return (result);
    // }

    // move to dispatch to top
    console.log("In mealform");
    dispatch({
      type: "ADD_MEAL",
      payload: {
        type,
        carbs,
        meal_name,
        selecteDate,
      },
    });
  }

  return (
    <>
      <div>
        <h5>Add a new meal...</h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Meal Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setMealName(e.target.value);
            }}
          />

          <label htmlFor="type">Meal Type:</label>
          <select
            name="type"
            id="mealtype"
            onChange={(e) => {
              setMealType(e.target.value);
            }}
          >
            <option value="Breakfest">Breakfest</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>

          <label htmlFor="date"> Day:</label>
          <select
            id="day"
            name="day"
            required
            onChange={(e) => {
              setDayOfWeek(e.target.value);
              setSelectedDate(renderDate(startDate, e.target.value));
            }}
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <label htmlFor="total"> meal total carbs:</label>
          <input
            id="total"
            type="number"
            min="0"
            onChange={(e) => {
              setTotalCarbs(Number(e.target.value));
            }}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default MealForm;