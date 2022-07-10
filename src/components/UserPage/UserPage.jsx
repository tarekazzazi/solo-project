import React from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>

      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
