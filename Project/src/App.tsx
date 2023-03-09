import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Application from "./component/applacation/aplacation";
import { MuiMode } from "../src/component/mui/mui-mode";
import { AppProviders } from "./providers/App-Providers";
function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
