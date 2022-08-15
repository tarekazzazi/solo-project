import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import "./Styles/HealthInfoPage.css";
import { Stack, Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function EditInfoPage({ toggleEdit }) {
  const user = useSelector((store) => store.user);

  const EditHealthInfo = () => {
    console.log("hello");
    toggleEdit();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#b2102f",
      },
    },
  });

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
              elevation={2}
              sx={{
                padding: "4em",
                margin: "2em",
              }}
            >
              <h2>My Health Info</h2>
              <ul className="profileInfo">
                <li>Welcome, {user.name}</li>
                <br />
                <li> You currently weigh: {user.wieght} lbs </li>
                <br />
                <li>Carb Limit: {user.max_carbs}</li>
              </ul>

              <div>
                <Button variant="contained" onClick={EditHealthInfo}>
                  {" "}
                  Edit{" "}
                </Button>
              </div>
            </Card>
          </div>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}

export default EditInfoPage;
