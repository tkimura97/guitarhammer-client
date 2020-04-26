import React, { Component } from "react";
import Routing from "./app/pages/Routing";
import Navbar from "./app/components/navbars/Navbar";
import NavItem from "./app/components/navbars/NavItem";
import DropdownMenu from "./app/components/navbars/DropdownMenu";
import { ReactComponent as EguitarIcon } from "./icons/electric_guitar.svg";
import { ReactComponent as AguitarIcon } from "./icons/acoustic_guitar.svg";
import { ReactComponent as LguitarIcon } from "./icons/lespaul.svg";
import { ReactComponent as HamburgerIcon } from "./icons/hamburger.svg";

class App extends Component {
  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <Navbar>
          <div className="site-name">Guitar-Hammer</div>
          <NavItem icon={<AguitarIcon />} />
          <NavItem icon={<EguitarIcon />} />
          <NavItem icon={<LguitarIcon />} />

          <NavItem icon={<HamburgerIcon />}>
            {/* Dropdown goes here */}
            <DropdownMenu />
          </NavItem>
        </Navbar>

        {/* Routing Page */}
        <Routing />
      </div>
    );
  }
}

export default App;
