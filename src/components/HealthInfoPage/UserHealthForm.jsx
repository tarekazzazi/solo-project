import React from "react";
import { useSelector } from "react-redux";
import "./Styles/HealthInfoPage.css";
function HealthInfoPage() {
  const user = useSelector((store) => store.user);

  const EditHealthInfo = () => {
    console.log("hello");
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
            placeholder="Enter a new nickName"
            value={user.name}
          />
        </li>

        <li>
          You currently weigh:{" "}
          <input
            type="number"
            required="required"
            placeholder="Enter your weight"
            value={user.wieght}
          />
          lbs
        </li>

        <li>
          Carb Limtit:{" "}
          <input
            type="number"
            required="required"
            placeholder="Enter your weekly carb limit"
            value={user.max_carbs}
          />
        </li>

        <li>
          <textarea
            type="text"
            required="required"
            placeholder="any new notes"
            value={user.doctor_notes}
          />
        </li>
      </ul>

      <div>
        <button onClick={EditHealthInfo}> Save </button>
      </div>
    </div>
  );
}

export default HealthInfoPage;
