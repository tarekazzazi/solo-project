import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
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

        <li>Carb Limit: {user.max_carbs}</li>

        <li>{user.doctor_notes}</li>
      </ul>

      <div>
        <Button variant="contained" onClick={EditHealthInfo}>
          {" "}
          Edit{" "}
        </Button>
      </div>
    </div>
  );
}

export default EditInfoPage;
