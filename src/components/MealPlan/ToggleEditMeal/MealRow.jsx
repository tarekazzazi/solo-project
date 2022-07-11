import { Fragment } from "react";
import EditDetail from "./EditDetail";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect, useState } from "react";
function singleMealRow({ meal }) {
  // passing in meal prop on to EditDetail page and ReadOnlyRow page
  // new state created editMeal
  // editMeal set to false in function toggleEdit
  // return fragment Checks to see if editeMeal is false then show EditDetail page if true show ReadOnlyRow page
  const [editMeal, setEditMeal] = useState();

  function toggleEdit() {
    setEditMeal(!editMeal);
  }
  return (
    <>
      <Fragment>
        {editMeal === false ? (
          <EditDetail meal={meal} />
        ) : (
          <ReadOnlyRow meal={meal} toggleEdit={toggleEdit} />
        )}
      </Fragment>
    </>
  );
}

export default singleMealRow;
