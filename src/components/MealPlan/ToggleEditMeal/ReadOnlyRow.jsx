import React from "react";
import moment from "moment";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";

function ReadOnlyRow({ meal, toggleEdit }) {
  const dispatch = useDispatch();

  const dates = useSelector((store) => store.date);

  console.log("dates fromredux store are", dates);
  // on edit button click run function toggleEdit
  const editMeal = () => {
    toggleEdit();
  };
  // passes in meal.id
  // dispatchs meal.id as mealId to mealSaga
  const deleteMealTableRow = (id) => {
    console.log("Hello", id);

    dispatch({
      type: "DELETE_MEAL",
      payload: {
        mealId: id,
        startDate: dates.startDate,
        endDate: dates.endDate,
      },
    });
  };

  return (
    <TableRow key={meal.id}>
      <TableCell>{moment(meal.date).format("MM-DD-YYYY")}</TableCell>

      <TableCell className="tableCell">{meal.meal_name}</TableCell>
      <TableCell className="tableCell">{meal.meal_type}</TableCell>
      <TableCell className="tableCell">{meal.carbs}</TableCell>
      <TableCell className="tableCell">{meal.blood_sugar_lvl}</TableCell>

      <TableCell>
        <Stack direction="row" spacing={2}>
          <Button onClick={editMeal}>Edit</Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => deleteMealTableRow(meal.id)}
          >
            DELETE
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default ReadOnlyRow;
