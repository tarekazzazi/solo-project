import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HealthInfoPage() {
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>My Health Info</h2>

      <p>Welcome, {user.name}</p>

      <p> You currently weigh: {user.wieght} lbs </p>

      <p>Carb Limtit: {user.max_carbs}</p>

      <p>{user.doctor_notes}</p>

      <div>
        <Link to="/editform">
          <button> Edit </button>
        </Link>
      </div>
    </div>
  );
}

export default HealthInfoPage;
