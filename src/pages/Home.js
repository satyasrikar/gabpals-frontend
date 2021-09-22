import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Landing from "./Landing";
import Login from "./Login";

const Home = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </Router>
  );
};

export default Home;
