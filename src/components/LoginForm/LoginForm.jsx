import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Stack, Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5246A6",
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
          <form className="formPanel" onSubmit={login}>
            <Card
              elevation={4}
              sx={{
                padding: "2em",
                margin: "2em",
              }}
            >
              <h2>Login</h2>
              {errors.loginMessage && (
                <h3 className="alert" role="alert">
                  {errors.loginMessage}
                </h3>
              )}
              <div>
                <label htmlFor="username">
                  Username:
                  <input
                    type="text"
                    name="username"
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </div>
              <div>
                <input
                  className="btn"
                  type="submit"
                  name="submit"
                  value="Log In"
                />
              </div>
            </Card>
          </form>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginForm;
