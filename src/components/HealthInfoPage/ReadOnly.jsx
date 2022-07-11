import React from "react";
import { useSelector } from "react-redux";
function EditInfoPage({ toggleEdit }) {
  const user = useSelector((store) => store.user);

  const EditHealthInfo = () => {
    console.log("hello");
    toggleEdit();
  };
  return (
    <div className="container">
      <h2>My Health Info</h2>

      <p>Welcome, {user.name}</p>

      <p> You currently weigh: {user.wieght} lbs </p>

      <p>Carb Limtit: {user.max_carbs}</p>

      <p>{user.doctor_notes}</p>

      <div>
        <button onClick={EditHealthInfo}> Edit </button>
      </div>
    </div>
  );
}

export default EditInfoPage;
