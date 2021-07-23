import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HOME_PATH, SELLING_PATH, ISO_PATH, GROUPBUY_PATH, ORDERS_PATH, ACCOUNT_PATH, DISCOVER_path, POSTS_path } from "../../views";
import { Link } from "react-router-dom"


function NavMain() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={HOME_PATH}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={GROUPBUY_PATH}>Group Buys</Nav.Link>
                        <Nav.Link as={Link} to={DISCOVER_path}>Discover</Nav.Link>
                        <NavDropdown title="Shop" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={SELLING_PATH}>Selling</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ISO_PATH}>ISO</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={POSTS_path}>Your Posts</NavDropdown.Item>
                            {/* incase need to add seperate section */}
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={ORDERS_PATH}>Orders</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to={ACCOUNT_PATH}>
                            Account
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavMain;