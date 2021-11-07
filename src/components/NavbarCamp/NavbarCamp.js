import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useFirebase from "../Hook/useFirebase";
import './NavbarCamp.css';

const NavbarCamp = () => {
  const { user,logOut } = useAuth();
  return (
    <div>
      <Navbar bg="danger" className="p-3" expand="lg">
        <Navbar.Brand href="#home" className="text-dark">
          {/* <h3> Mordern HealthCare</h3> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/friends">Services</Link>
            <Link className="link" to="/shipping">Get Appointment</Link>
            <Link className="link" to="/about">About Us</Link>
            <Link className="link" to="/culture">Contact</Link>
            <Link className="link" to="/login">Log In</Link>
            <Link className="link" to="/register">Register</Link>
            {
               user?.email &&
               <button  className="btn-primary"  onClick={ logOut } > Log Out </button>
            }
            <span className=" text-white " > <h5> { user?.displayName } </h5> </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default NavbarCamp;
