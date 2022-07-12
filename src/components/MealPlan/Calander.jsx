import React from "react";
import { WeeklyCalendar } from "react-week-picker";
import "react-week-picker/src/lib/calendar.css";
import { useDispatch } from "react-redux";

function Calender() {
  const dispatch = useDispatch();

  const handleWeekPick = (startDate) => {
    console.log(`${startDate} `);

    dispatch({
      type: "ADD_DATE",
      payload: startDate,
    });
  };

  return (
    <>
      <div data-testid="calendar">
        <WeeklyCalendar
          onWeekPick={handleWeekPick}
          // // jumpToCurrentWeekRequired={true}
          // onJumpToCurrentWeek={handleJumpToCurrentWeek}
        />
      </div>
    </>
  );
}

export default Calender;
