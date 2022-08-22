import React from "react";
import "./Styles/HealthInfoPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "@mui/material/Button";

function HealthInfoPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [nickname, setNickName] = useState(user.name);
  const [weight, setWeight] = useState(user.wieght);
  const [maxCarbs, setMaxCarbs] = useState(user.max_carbs);
  const [doctorNotes, setDoctorNotes] = useState(user.doctor_notes);

  const updateHealthInfo = () => {
    dispatch({
      type: "UPDATE_USER_HEALTH_INFO",
      payload: {
        userId: user.id,
        name: nickname,
        wieght: weight,
        max_carbs: maxCarbs,
        doctor_notes: doctorNotes,
      },
    });
  };

  return (
    <div className="container">
      <h2>My Health Info</h2>
      <ul>
        <li>
          Welcome,{" "}
          <input
            type="text"
            required="required"
            placeholder="Enter a new nickname"
            value={nickname}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </li>

        <li>
          You currently weigh:{" "}
          <input
            type="number"
            required="required"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          lbs
        </li>

        <li>
          Carb Limit:{" "}
          <input
            type="number"
            required="required"
            placeholder="Weekly carb limit"
            value={maxCarbs}
            onChange={(e) => {
              setMaxCarbs(e.target.value);
            }}
          />
        </li>

        <li>
          <textarea
            type="text"
            required="required"
            placeholder="Doctor Notes"
            value={doctorNotes}
            onChange={(e) => {
              setDoctorNotes(e.target.value);
            }}
          />
        </li>
      </ul>

      <div>
        <Button variant="contained" onClick={updateHealthInfo}>
          {" "}
          Save{" "}
        </Button>
      </div>
    </div>
  );
}

export default HealthInfoPage;
