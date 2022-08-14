import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import currenDate from "./Calander";

import { Stack, Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Styles/Form.css";

function MealForm() {
  const [selecteDate, setSelectedDate] = useState("");
  const [day, setDayOfWeek] = useState("");
  const [type, setMealType] = useState("Breakfast");
  const [carbs, setTotalCarbs] = useState(0);
  const [meal_name, setMealName] = useState("");

  console.log("the current date is", currenDate);
  const dispatch = useDispatch();
  const startDate = useSelector((store) => store.date.startDate);
  const dateRange = useSelector((store) => store.date);

  console.log("selectdate is", startDate);
  const user = useSelector((store) => store.user);
  // Sets state of Meal Form variables

  function handleSubmit(evt) {
    evt.preventDefault();

    // move to dispatch to top
    console.log("In mealform");
    dispatch({
      type: "ADD_MEAL",
      payload: {
        user: user.id,
        type,
        carbs,
        meal_name,
        selecteDate,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
      },
    });

    evt.target.reset();
    console.log("Select date", selecteDate);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#b2102f",
      },
    },
  });

  // checks to see if day === "Monday"
  // startDate is always a Monday of the selected week
  // If true returns the startDate of the week
  // If Its any other day than monday it adds a day to the start date till it reachs wednesday or thursday or friday etc...
  function renderDate(startDate, day) {
    switch (day) {
      case "Monday":
        return addDays(new Date(startDate), 1); // calculates how many days to add onto start date
      case "Tuesday":
        return addDays(new Date(startDate), 2);
      case "Wednesday":
        return addDays(new Date(startDate), 3);
      case "Thursday":
        return addDays(new Date(startDate), 4);
      case "Friday":
        return addDays(new Date(startDate), 5);
      case "Saturday":
        return addDays(new Date(startDate), 6);
      case "Sunday":
        return addDays(new Date(startDate), 0);
    }
    return;
  }
  function addDays(date, days) {
    // Calculates new date here
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    // console.log(result);
    const mealdate = result;

    return mealdate;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <>
          <div>
            <h3>Add a new meal...</h3>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "1em",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Card
                  elevation={3}
                  sx={{
                    padding: "2em",
                    margin: "2em",
                  }}
                >
                  <label htmlFor="name">Meal Name:</label>
                  <FormControl sx={{ m: 1, width: 125 }}>
                    <TextField
                      name="mealName"
                      type="text"
                      onChange={(e) => {
                        setMealName(e.target.value);
                      }}
                    />
                  </FormControl>
                  {/* SETS MEAL NAME TO STATE   */}
                  <label htmlFor="type">Meal Type:</label>
                  <FormControl sx={{ m: 1, width: 125 }}>
                    <Select
                      name="type"
                      id="mealtype"
                      onChange={(e) => {
                        setMealType(e.target.value);
                      }}
                    >
                      <MenuItem value="Breakfast">Breakfast</MenuItem>
                      <MenuItem value="Lunch">Lunch</MenuItem>
                      <MenuItem value="Dinner">Dinner</MenuItem>
                    </Select>
                  </FormControl>
                  {/* SELECTS DAY OF WEEK AND SETS TO STATE VARIABLE */}

                  <label htmlFor="date"> Day:</label>
                  <FormControl sx={{ m: 1, width: 135 }}>
                    <Select
                      id="day"
                      name="day"
                      required
                      onChange={(e) => {
                        setDayOfWeek(e.target.value);
                        setSelectedDate(renderDate(startDate, e.target.value));
                      }}
                    >
                      <MenuItem value="">Select Day</MenuItem>
                      <MenuItem value="Monday">Monday</MenuItem>
                      <MenuItem value="Tuesday">Tuesday</MenuItem>
                      <MenuItem value="Wednesday">Wednesday</MenuItem>
                      <MenuItem value="Thursday">Thursday</MenuItem>
                      <MenuItem value="Friday">Friday</MenuItem>
                      <MenuItem value="Saturday">Saturday</MenuItem>
                      <MenuItem value="Sunday">Sunday</MenuItem>
                    </Select>
                  </FormControl>
                  {/* SETS TOTAL CARBS FOR WEEK */}
                  <label htmlFor="total">Total Carbs:</label>
                  <FormControl sx={{ m: 1, width: 100 }}>
                    <TextField
                      id="total"
                      type="number"
                      min="0"
                      name="carbs"
                      onChange={(e) => {
                        setTotalCarbs(Number(e.target.value));
                      }}
                    />
                  </FormControl>

                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ marginTop: 2 }}
                  >
                    Add
                  </Button>
                </Card>
              </form>
            </Stack>
          </div>
        </>
      </Grid>
    </ThemeProvider>
  );
}

export default MealForm;
