import React from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>
    <div>

      <Bar 
        data={{
          labels: ['A','b','C','d'],
          datasets: [{
            label: 'Tarek Dataset',
            data: [1,2,3,4,5,6],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 50, 192)',
            lineTension: 0.1,
          }]
        }}

        height={400}
        width={600}

      />


    </div>


      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
