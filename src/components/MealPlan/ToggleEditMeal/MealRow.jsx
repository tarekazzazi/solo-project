import { Fragment } from "react";
import EditDetail from "./EditDetail";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect, useState } from "react";
function singleMealRow({ meal }) {
  // Passing in meal prop on to EditDetail componet and ReadOnlyRow componet
  // New state created editMeal
  // Default value for editMeal  is set to false in toggleEdit function
  // return fragment Checks to see if editeMeal is false show EditDetail componet
  // if true show ReadOnlyRow componet
  const [editMeal, setEditMeal] = useState();

  function toggleEdit() {
    setEditMeal(!editMeal);
  }
  return (
    <>
      <Fragment>
        {editMeal === false ? (
          <EditDetail meal={meal} toggleEdit={toggleEdit} />
        ) : (
          <ReadOnlyRow meal={meal} toggleEdit={toggleEdit} />
        )}
      </Fragment>
    </>
  );
}

export default singleMealRow;
