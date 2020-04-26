import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      // Classnames are added for easy styling
      <nav className="navbar">
        <ul className="navbar-nav">{this.props.children}</ul>
      </nav>
    );
  }
}

export default Navbar;
