
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import currenDate from './Calander';
function MealForm() {
    console.log('the current date is',currenDate);
    const dispatch = useDispatch();

    const [date, setDateTo] = useState('');
    const [type, setMealType] = useState('Breakfest');
    const [carbs, setTotalCarbs] = useState(0);
    const [meal_name, setMealName ] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(date);
        console.log(type);
        console.log(carbs);
        console.log(meal_name);

       dispatch({
            type: 'ADD_MEAL',
            payload: {
                type,
                carbs,
                meal_name,
                date,
                
            }
        })

    }

    return (
        <>
            <div>
                <h5>Add a new meal...</h5>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Meal Name:</label>
                    <input type="text"
                    onChange={e => {setMealName(e.target.value)}}
                    />

                    <label htmlFor="type">Meal Type:</label>
                    <select
                        name="type"
                        id="mealtype"
                        onChange={e => { setMealType(e.target.value) }}
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
                        onChange={e => { setDateTo(e.target.value) }}
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
                        onChange={e => { setTotalCarbs(Number(e.target.value)) }}
                    />

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default MealForm;