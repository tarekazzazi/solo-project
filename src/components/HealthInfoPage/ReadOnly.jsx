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
      <ul>
        <li>Welcome, {user.name}</li>

        <li> You currently weigh: {user.wieght} lbs </li>

        <li>Carb Limtit: {user.max_carbs}</li>

        <li>{user.doctor_notes}</li>
      </ul>

      <div>
        <button onClick={EditHealthInfo}> Edit </button>
      </div>
    </div>
  );
}

export default EditInfoPage;
