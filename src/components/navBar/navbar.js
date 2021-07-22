import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HOME_PATH, SELLING_PATH, ISO_PATH, GROUPBUY_PATH, ORDERS_PATH, ACCOUNT_PATH, DISCOVER_path } from "../../views";
import { Link } from "react-router-dom"


function NavMain() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={GROUPBUY_PATH}>Group Buys</Nav.Link>
                        <Nav.Link as={Link} to={DISCOVER_path}>Discover</Nav.Link>
                        <NavDropdown title="Shop" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Selling</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ISO</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Your Posts</NavDropdown.Item>
                            {/* incase need to add seperate section */}
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Orders</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Account
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavMain;