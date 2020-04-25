import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Table from "../components/Table";
import Search from "../components/Search";

class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routing;
