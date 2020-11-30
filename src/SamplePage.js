import React from "react";
import "./App.css";
import Theme1 from "./Theme1";
import { Button, Switch, Paper, Box, ThemeProvider } from "@material-ui/core";

function SamplePage() {
  return (
    <div>
      <ThemeProvider theme={Theme1}>
        <Button>Click Me</Button>
        <Switch
          variant="contained"
          color="default"
          style={{ color: "#000" }}
       
        >
          NightMode
        </Switch>
        <Paper>
          <h1>HelloWorld.!</h1>
          <Box color="text.secondary" clone>
            <Button variant="outlined" color="primary">
              Click me First{" "}
            </Button>
          </Box>
          <Box component="span" m={1}>
            <Button variant="contained" color="secondary">
              Click Me Next
            </Button>{" "}
          </Box>
          <Box component="span" m={1}>
            <Button variant="contained" color="primary">
              Click Me Next
            </Button>{" "}
          </Box>
          <Switch color="default"></Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default SamplePage;
