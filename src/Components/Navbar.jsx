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

function Navba() {
  const isOpen = true;

  const toggle = !isOpen;

  return (
    <Navbar className="chl">
      <NavbarBrand className="brand">
        <h2>UG</h2>
      </NavbarBrand>
      <NavbarToggler onClick={toggle}></NavbarToggler>
      <Collapse isOpen={isOpen}>
        <Nav>
          <NavItem>
            <NavLink href="/" className="hov">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="hov">
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="hov">
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="hov">
              Achievments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="hov">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navba;
