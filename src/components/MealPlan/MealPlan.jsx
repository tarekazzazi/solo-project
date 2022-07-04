import React from 'react';
import './MealPlan.css';
function MealPlan() {
  return (
    <div className="container">
      <p>Meal planner</p>
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
  );
}

export default MealPlan;