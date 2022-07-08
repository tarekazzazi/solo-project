import React from "react";
import "./HealthProfilePage.css";
import { useState, useEffect } from "react";

function UserProfilePage() {
  const [name, setNickName] = useState("");
  const [wieght, setWieght] = useState([]);
  const [carbLimit, setWeeklyCarbLimit] = useState([]);
  const [doctorNotes, setDoctorNotes] = useState("");

  function sumbitHealthForm(evt) {
    evt.preventDefault();
    console.log("made it into submit form");
    console.log(name);
    console.log(wieght);
    console.log(carbLimit);
    console.log(doctorNotes);
  }
  return (
    <div className="container">
      <p>Health Information</p>

      <form onSubmit={sumbitHealthForm}>
        <label htmlFor="text">Name:</label>
        <input
          required
          type="text"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="number">Weekly Carb limit</label>
        <input
          required
          type="number"
          onChange={(e) => {
            setWeeklyCarbLimit(e.target.value);
          }}
        />

        <br />
        <label htmlFor="number">Weight:</label>
        <input
          required
          type="number"
          min={0}
          max={300}
          onChange={(e) => {
            setWieght(e.target.value);
          }}
        />
        <label htmlFor="number">lbs</label>
        <br />
        <label htmlFor="comment">Doctor Notes</label>
        <br />
        <textarea
          name="comment"
          onChange={(e) => {
            setDoctorNotes(e.target.value);
          }}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserProfilePage;
