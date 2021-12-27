import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Component/Header";
import Accueil from "./Component/Homepage/Accueil/Accueil";
import Calendly from "./Component/Calendly";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/accueil" component={Accueil} />
          <Route exact path="/reservation" component={Calendly} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
