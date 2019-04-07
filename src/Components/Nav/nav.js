import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'

export default function Navigation() {

return (

                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Traveloggia</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/Map">Map</Nav.Link>
                        <Nav.Link href="/Site">Info</Nav.Link>
                        <Nav.Link href="/Photo">Photos</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">1</NavDropdown.Item>
                            <NavDropdown.Item href="">2</NavDropdown.Item>
                             <NavDropdown.Item href="">3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </Navbar>
                )

}