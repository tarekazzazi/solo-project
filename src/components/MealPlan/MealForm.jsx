
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
function MealForm() {
    const [date, setDateTo] = useState([]);
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(date);
        // useDispatch({
        //     type: 'ADD_MEAL',
        //     payload: {
               


        //     }
        // })
       


    }

    return (
        <>
            <div>
                <h5>Add a new meal...</h5>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Meal Name:</label>
                    <input type="text" 
                    
                    />

                    <label htmlFor="type">Meal Type:</label>
                    <select
                        name="type"
                        id="mealtype">
                        <option value="Breakfest">Breakfest</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>

                    <label htmlFor="date"> Day:</label>
                    <select
                        name="date"
                        id="date"
                        onChange={e => {setDateTo(e.target.value)}}
                        >
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>

                    <label htmlFor="total"> meal total carbs:</label>
                    <input id="total" type="number" min="0" />

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default MealForm;