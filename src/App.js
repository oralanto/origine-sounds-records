import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Homepage from "./Component/Homepage/Homepage";
import Reservation from "./Component/Reservation/Reservation";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/reservation" component={Reservation} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
