import React from 'react';
import './MealPlan.css';
function MealPlan() {
  return (
    <div className="container">
      <p>Meal planner</p>

      <div className='navBar2'>

        <button>⬅️</button>

        <label htmlFor="date"> Week of:</label>
        <input
          type="date"
          name="weekOf"
          value="2022-07-22"
          min="2022-07-22"
        />

        <label>Max Carb Intake: 210/GMs </label>
        <button>➡️</button>

      </div>

      {/* //////////////////MEAL TABLE/////////////////////////// */}
      <div>
        <table>
          <thead>
            <th>Day</th>
            <th>Meal</th>
            <th>Type</th>
            <th>Carbs</th>
            <th>Blood sugar level</th>
            <th>Notes</th>
            <th>    </th>
          </thead>
          <tbody>
            <tr>
              <th>Monday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Tuesday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Wednesday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Thursday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Friday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Saturday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" />
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <th>Sunday</th>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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
    </div>
  );
}

export default MealPlan;