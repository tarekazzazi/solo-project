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
    </div>
  );
}

export default HealthInfoPage;
