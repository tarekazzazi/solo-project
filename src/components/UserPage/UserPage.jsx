import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import moment from "moment";
import "./UserPage.css";

function UserPage() {
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b2102f",
      },
    },
  });

  function addDays(date, days) {
    // Calculates new date here based off of date and days params given
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const user = useSelector((store) => store.user);
  const blood = useSelector((store) =>
    // Filters every meal in the redux store and checks if the user id
    // Attached to the meal matches the user id of the person logged in
    store.meal.filter((meal) => {
      if (meal.user_id === user.id) {
        return meal.blood_sugar_lvl;
      }
    })
  );

  let UserBloodSugarLevel = blood.map((userBloodSugar) => {
    return userBloodSugar.blood_sugar_lvl;
  });

  useEffect(() => {
    //  Uses moment to determine the start of the week
    //  Adds 7 days to the startdate to determine the end date
    const startOfWeek = moment().startOf("week").toDate();
    const startDate = moment(startOfWeek).format("MM-DD-YYYY");
    const endDate = moment(addDays(new Date(startDate), 7)).format(
      "MM-DD-YYYY"
    );

    dispatch({
      type: "FETCH_MEAL",
      payload: {
        startDate,
        endDate,
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "2em",
          }}
        >
          <div className="container">
            <Card
              elevation={4}
              sx={{
                padding: "2em",
                margin: "2em",
              }}
            >
              <h2>Welcome, {user.name}!</h2>
              <div className="Chart">
                <Line
                  data={{
                    labels: [
                      "MON",
                      "",
                      "",
                      "TUES",
                      "",
                      "",
                      "WED",
                      "",
                      "",
                      "THURS",
                      "",
                      "",
                      "FRI",
                      "",
                      "",
                      "SAT",
                      "",
                      "",
                      "SUN",
                      "",
                      "",
                    ],
                    datasets: [
                      {
                        label: "My blood sugar lvl",
                        data: UserBloodSugarLevel,
                        fill: false,
                        borderColor: "red",
                        lineTension: 0.1,
                      },
                      {
                        label: "Average blood suagr lvl",
                        data: [
                          130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
                          130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
                          130, 130,
                        ],
                        fill: true,
                        borderColor: "grey",
                        lineTension: 0.1,
                      },
                    ],
                  }}
                  height={400}
                  width={600}
                  options={{
                    responsive: false,
                    maintainAspectRatio: false,
                    title: {
                      display: true,
                      text: "Weekly Blood Sugar Tracking",
                    },
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            min: 50,
                            max: 300,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </Card>
          </div>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}

export default UserPage;
