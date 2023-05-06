import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "../styles/Topbar.css";
import { memo } from "react";

function Topbar({ user }) {
  console.log(user?.email, "email ==== top bar ====");

  return (
    <Navbar collapseOnSelect expand="lg" className="topbar_navbar">
      <Container>
        <Navbar.Brand href="#home">Amazon Pay.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="topbar_usermail" href="#deets">{user?.email || "No User"}</Nav.Link>
            {user?.email ? (
              <Button className="log_in_out_btn">
                <Link className="log_in_out" to="/sign-in">
                  Log out
                </Link>
              </Button>
            ) : (
              <Button className="log_in_out_btn">
                <Link className="log_in_out" to="/sign-in">
                  Log In
                </Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//? THE MEMO PREVENTS THE PAGE FROM RANDOMLY TRYING TO ALWAYS RE RENDER.
//? INSTEAD IT WAITS FOR THE PROPS TO CHANGE
export default memo(Topbar);
