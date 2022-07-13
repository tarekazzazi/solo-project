import "./Styles/MealPlan.css";
import "./MealPlanDetail";
import moment from "moment";
import Calender from "./Calander";
import MealRow from "./ToggleEditMeal/MealRow";
import MealForm from "./MealForm";
import CarbCalculate from "./Calculate/CarbCalculate";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function MealPlan() {
  const dispatch = useDispatch();
  const meals = useSelector((store) => store.meal);
  const dateArray = useSelector((store) =>
    store.meal.map((meal) => {
      return moment(meal.date).format("MM-DD-YYYY");
    })
  );

  const orderDates = useSelector((store) => store.date);

  console.log("Array of dates", dateArray);

  console.log("the meals are", meals);

  function addDays(date, days) {
    // Calculates new date here
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    // console.log(result);
    const mealdate = result;

    return mealdate;
  }

  useEffect(() => {


    console.log("In use Effect");
    const currendate = new Date();
    currendate.setDate(9);
    console.log('in meal page useEffect', moment(currendate).format("MM-DD-YYYY"));

    const startDate = moment(currendate).format("MM-DD-YYYY")

    const endDate = moment(addDays(new Date(startDate), 7)).format("MM-DD-YYYY");
   console.log( moment(endDate).format("MM-DD-YYYY"));

    

    dispatch({
      type: "FETCH_MEAL",
      payload: {
      startDate,
      endDate
         
      },
    });
  }, []);

  return (
    // Object.keys(orderDates).length > 0 && 
      <div className="container">
        <h2>Weekly Meal Plan</h2>

        <div className="navBar2">
        
          <label htmlFor="date"> Week of:</label>
          <div className="date">
            <Calender />
          </div>

          <label>
            Max Carb Intake: <CarbCalculate />{" "}
          </label>
          
        </div>

        {/* //////////////////MEAL TABLE/////////////////////////// */}
        <div className="mealTableContainer">
          <form>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Meal</th>
                  <th>Type</th>
                  <th>Carbs</th>
                  <th>Blood sugar level</th>
                  <th></th>
                  <th></th>
                  
                </tr>
              </thead>

              <tbody className="mealBody">
                {meals &&
                  meals.map((meal) => {
                    return <MealRow key={meal.id} meal={meal} />;
                  })}
                {/* <MealPlanDetail /> */}
              </tbody>
            </table>
          </form>
        </div>
        {/* ////////////////////////END OF MEAL TABLE?//////////////////////////// */}

        {/* ////////////////Add A New Meal Form////////////////////////////////// */}
        <MealForm />
      </div>
    
  );
}

export default MealPlan;
