import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navigation.css";


class Navigation extends React.Component {
	render() {
			if (window.location.pathname === '/') return null;
		return (
			<Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
				<Navbar.Brand href="/">Boulder Bike Tour</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#pricing">Media</Nav.Link>
						<NavDropdown title="The Race" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#">Rider Location</NavDropdown.Item>
							<NavDropdown.Item href="/Information">Rider Information</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#">Slogan Submission</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#"><i class="fab fa-facebook-f"></i></Nav.Link>
						<Nav.Link href="#"><i class="fab fa-instagram"></i></Nav.Link>
						<Nav.Link href="#"><i class="fab fa-twitter"></i></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigation;