import React from "react";
import { WeeklyCalendar } from "react-week-picker";
import "react-week-picker/src/lib/calendar.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./Styles/MealPlan.css";
function Calender() {
  const dispatch = useDispatch();

  useEffect(() => {
    handleWeekPick();
  }, []);

  const handleWeekPick = (startDate, endDate) => {
    console.log(`${startDate}  ${endDate}`);

    dispatch({
      type: "ADD_DATE",
      payload: { startDate, endDate },
    });
    dispatch({
      type: "FETCH_MEAL",
      payload: { startDate, endDate },
    });
  };

  return (
    <>
      <div data-testid="calendar">
        <WeeklyCalendar onWeekPick={handleWeekPick} />
      </div>
    </>
  );
}

export default Calender;
