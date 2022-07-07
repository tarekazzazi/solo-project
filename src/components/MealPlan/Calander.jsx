import React from 'react';
import { WeeklyCalendar } from 'react-week-picker';
import 'react-week-picker/src/lib/calendar.css';
import {useDispatch} from 'react-redux';
// import {useState} from 'react'

function Calender() {
const dispatch = useDispatch();

    // const handleJumpToCurrentWeek = (startDate) => {
    //     console.log(`current date: ${startDate}`);
    //     dispatch({
    //         type: 'ADD_DATE',
    //         payload: startDate
    //     }) 
    //     // do math logic in meal form (day + 1)
    // }

    const handleWeekPick = (startDate) => {
        console.log(`${startDate} `);
        startDate
        dispatch({
            type: 'JUMP_DATE',
            payload: startDate
        })

    }

    return (
        <>
            <div data-testid="calendar">
                <WeeklyCalendar
                    onWeekPick={handleWeekPick} 
                    // jumpToCurrentWeekRequired={true}
                    // onJumpToCurrentWeek={handleJumpToCurrentWeek}
                />
            </div>
           
        </>
    )
}

export default Calender;
