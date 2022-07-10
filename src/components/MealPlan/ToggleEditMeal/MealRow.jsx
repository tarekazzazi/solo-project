import { Fragment } from "react";
import EditDetail from "./EditDetail";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect, useState } from "react";
function singleMealRow({ meal }) {
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