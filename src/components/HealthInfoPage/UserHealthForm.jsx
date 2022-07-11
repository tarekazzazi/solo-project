import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HealthInfoPage() {
  const user = useSelector((store) => store.user);

  const EditHealthInfo = () => {
    console.log("hello");
  };

  return (
    <div className="container">
      <h2>My Health Info</h2>
      <ul>
        <li>Welcome, {user.name}</li>

        <li> You currently weigh: {user.wieght} lbs </li>

        <li>
          Carb Limtit:{" "}
          <input
            type="number"
            required="required"
            placeholder="Enter your carb limit"
          />
        </li>

        <li>{user.doctor_notes}</li>
      </ul>

      <div>
        <button onClick={EditHealthInfo}> Edit </button>
      </div>
    </div>
  );
}

export default HealthInfoPage;
