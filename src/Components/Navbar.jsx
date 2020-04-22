import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  UncontrolledCollapse,
} from "reactstrap";
import "../index.css";

class Navba extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    color: "navbar",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      this.setState({ color: "navbar change" });
    } else {
      this.setState({ color: "navbar" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar className={this.state.color} onScroll={this.handleScroll}>
        <NavbarBrand>
          <h1 className="navbrand">UG</h1>
        </NavbarBrand>
        <Nav className="navlinks">
          <NavItem>
            <NavLink href="/" className="navlink">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#edu" className="navlink">
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="navlink">
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="navlink">
              Achievments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="navlink">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navba;
