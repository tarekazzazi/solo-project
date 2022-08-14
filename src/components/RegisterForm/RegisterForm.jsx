import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setNickName] = useState("");
  const [weight, setWieght] = useState([]);
  const [carbLimit, setWeeklyCarbLimit] = useState([]);
  const [doctorNotes, setDoctorNotes] = useState("");

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        name: name,
        weight: weight,
        carbLimit: carbLimit,
        doctorNotes: doctorNotes,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        {/*  HEALTH INFO (EDITABLE)  */}
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
        {/* END of HEALTH INFO (EDITABLE) */}
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
