import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/table">
          <li>Table</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
      </div>
    );
  }
}

export default Home;
