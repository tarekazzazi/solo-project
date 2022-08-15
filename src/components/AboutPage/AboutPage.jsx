import React from "react";
import { Stack, Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
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
          <Card
            elevation={2}
            sx={{
              padding: "2em",
              paddingLeft: "0",
              margin: "2em",
            }}
          >
            <ul>
              <h3 className="aboutHeader"> Tech used to create this project</h3>
              <div className="aboutBody">
                <li>React</li>
                <li>Redux</li>
                <li>SQL</li>
                <li>MUI</li>
                <li>Chart js</li>
              </div>
            </ul>
          </Card>
        </Stack>
      </Grid>
    </div>
  );
}

export default AboutPage;
