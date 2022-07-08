import React from "react";
import "./HealthProfilePage.css";
function UserProfilePage() {
  function sumbitHealthForm(evt) {
    evt.preventDefault();
  }
  return (
    <div className="container">
      <p>Health Information</p>

      <form onSubmit={sumbitHealthForm}>
        <label htmlFor="text">Name:</label>
        <input type="text" />
        <br />
        <label htmlFor="number">Weekly Carb limit</label>
        <input type="number" />

        <br />
        <label htmlFor="number">Weight:</label>
        <input type="number" min={0} max={300} />
        <label htmlFor="number">lbs</label>
        <br />
        <label htmlFor="comment">Doctor Notes</label>
        <br />
        <textarea name="comment"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserProfilePage;
