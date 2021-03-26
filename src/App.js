import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">{Main}</Route>
        <Route exact path="/dashboard">{Dashboard}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
