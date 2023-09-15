import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import NavStyles from './topnavbar.module.scss';


function TopNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className={NavStyles.brand_logo} href="#home"><img src='../images/Una-Brands-Logo.png'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Who We Are</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Our Brands</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">How It Works</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Careers</Nav.Link>
                            <Nav.Link href="#pricing">Partners</Nav.Link>
                            <NavDropdown title="Media" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Press</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className={NavStyles.right_part_nav}>
                            <button className={NavStyles.right_side_topnav_button}><Nav.Link href="#deets">Get A Valuation</Nav.Link></button>
                            <Form.Select aria-label="Default select example" className={NavStyles.right_side_topnav}>
                                <option value="1">English</option>
                                <option value="2">Indonesian</option>
                                <option value="3">Chinese</option>
                            </Form.Select>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavbar