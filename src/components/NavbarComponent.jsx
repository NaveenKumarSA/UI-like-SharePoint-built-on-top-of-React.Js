import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import {
  Button,
  Card,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Dropdown,
  Toggle,
  DropdownButton,
} from "react-bootstrap";
export class NavbarComponent extends Component {
  render() {
    return (
      <div>
        {/* first Navbar Component  */}
        <Navbar className="justify-content-between" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">
            <Row>
              <div
                variant="col"
                style={{
                  fontSize: "30px",
                  fontStretch: "20px",
                  marginLeft: "25px",
                  fontWeight: 1500,
                }}
              >
                <b style={{ lineHeight: "5px" }}>
                  J A A <div style={{ color: "orange" }}>&</div> Associates{" "}
                </b>
              </div>
              <br />
              <p
                varient="col"
                style={{
                  lineHeight: "30px",
                  fontSize: "14px",
                  marginTop: "35px",
                  marginLeft: "10px",
                }}
              >
                We Listen. We Learn. We Execute.
              </p>
            </Row>
          </Navbar.Brand>
          <div >
          <DropdownButton className="userButton" id="dropdown-basic-button" title="User">
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </DropdownButton></div>
          {/* <NavDropdown
            title="User"
            aria-controls="navDiv"
            bg="warning"
          >
            <NavDropdown.Item id="navDiv">
              <Nav.Link href="#features">Logout</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown> */}

          {/* <Navbar.Toggle aria-placeholder="User" aria-controls="navDiv" bg="warning">
           
            <Navbar.Collapse id="navDiv">
              <Nav.Link href="#features">Logout</Nav.Link>
            </Navbar.Collapse>
          </Navbar.Toggle> */}
          {/* <Nav>
            <NavDropdown title="User ">
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar>
        {/* this is a second nav bar  */}
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg=""
          variant="light"
          style={{ backgroundColor: "#ffa111" }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Website</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Mail/PhoneNo/Whatsapp
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
