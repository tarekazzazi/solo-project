import React from 'react';
import './MealPlan.css';
import './MealPlanDetail';
import Calender from './Calander';
import { FaArrowAltCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
function MealPlan() {
  const dispatch = useDispatch();

    useEffect(() => {
      console.log('In use Effect');
      dispatch({
        type: 'FETCH_MEAL'
      })
    },[])
  return (
    
    <div className="container">
      <p>Meal planner</p>

      <div className='navBar2'>

        <FaArrowAltCircleLeft />
        <label htmlFor="date"> Week of:</label>
        <div className='date'>
          <Calender />
        </div>

        <label>Max Carb Intake: 210/GMs </label>
        <FaArrowCircleRight />

      </div>

      {/* //////////////////MEAL TABLE/////////////////////////// */}
      <div className='mealTableContainer'>

        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Meal</th>
              <th>Type</th>
              <th>Carbs</th>
              <th>Blood sugar level</th>
              <th>Notes</th>
              <th>    </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Monday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>


              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Tuesday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Wednesday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Thursday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Friday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Saturday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Sunday</th>

              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td className='tableCell'></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      {/* ////////////////////////END OF MEAL TABLE?//////////////////////////// */}

      {/* ////////////////Add A New Meal Form////////////////////////////////// */}
      <div>
        <h5>Add a new meal...</h5>
        <form>
          <label htmlFor="name">Meal Name:</label>
          <input type="text" />

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
            id="date">
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
    </div>
  );
}

export default MealPlan;
