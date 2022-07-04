import React from 'react';
import './UserProfilePage.css';
function UserProfilePage() {
    return (
      <div className="container">
        <p>Health Information</p>

        <form>
            <label htmlFor="text">Name:</label>
            <input type="text" />
            <br/>
            <label htmlFor="number">Weekly Carb limit</label>
            <input type="number" />
            
            <br/>
            <label htmlFor="number">Weight:</label>
            <input type="number" min={0} max={300} />
            <label htmlFor="number">lbs</label>
            <br/>
            <label htmlFor="comment">Doctor Notes</label>
            <br/>
            <textarea name="comment"></textarea>
        </form>
        
      </div>
    );
  }
  
  export default UserProfilePage;