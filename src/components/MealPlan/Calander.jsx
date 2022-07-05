import React from 'react';
import { WeeklyCalendar } from 'react-week-picker';
import 'react-week-picker/src/lib/calendar.css';

function Calender() {

    const handleJumpToCurrentWeek = (currenDate) => {
        console.log(`current date: ${currenDate}`);
    }

    const handleWeekPick = (startDate, endDate) => {
        console.log(`${startDate} to ${endDate}`);
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
        </>
    )
}

export default Calender;
