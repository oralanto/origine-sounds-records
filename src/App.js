import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Component/Header";
import Homepage from "./Component/Homepage/Homepage";
import Calendly from "./Component/Calendly";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/reservation" component={Calendly} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
