import React, { Component } from "react";
import Routing from "./app/pages/Routing";
import * as ReactBootStrap from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        {/* Bootstrap Navbar */}
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <ReactBootStrap.Navbar.Brand href="/">
            Guitar-Hammer
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/table">
                Table
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/search">
                Search
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Something
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  Separated link
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

        {/* Load Components */}
        <Routing />
      </div>
    );
  }
}

export default App;
