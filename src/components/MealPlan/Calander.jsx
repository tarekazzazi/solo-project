import React from 'react';
import { WeeklyCalendar } from 'react-week-picker';
import 'react-week-picker/src/lib/calendar.css';
import {useDispatch} from 'react-redux';
// import {useState} from 'react'

function Calender() {
const dispatch = useDispatch();
  
    const handleJumpToCurrentWeek = (currenDate) => {
        console.log(`current date: ${currenDate}`);
        dispatch({
            type: 'JUMP_DATE',
            payload: currenDate
        }) 
        // do math logic in meal form (day + 1)
    }

    const handleWeekPick = (startDate, endDate) => {
        console.log(`${startDate} to ${endDate}`);
        dispatch({
            type: 'ADD_DATE',
            payload: startDate
        })

    }

    return (
        <>
            <div data-testid="calendar">
                <WeeklyCalendar
                    onWeekPick={handleWeekPick} j
                    jumpToCurrentWeekRequired={true}
                    onJumpToCurrentWeek={handleJumpToCurrentWeek}
                />
            </div>
            {/* <button onClick={getmeAdate}>date me</button> */}
        </>
    )
}

export default Calender;
