import React from "react";
import Counter from './Counter'
import { Navbar, Nav, NavDropdown, Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./Navigation.css";
import "./Home.css";
import rocky_logo from "../images/rocky-logo.jpg";


class Home extends React.Component {
	render() {
    	return (
			<div>
				<div class="home_intro_bg">
					<div class="home_intro_text">
						<h1> Boulder Bike Tour </h1>
						<h2><span><i class="fas fa-map-marker-alt"></i> Rocky Mountains, Colorado</span></h2>
					</div>
				</div>
				

				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#">Media</Nav.Link>
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
			
			<Jumbotron >
				<Container>
					<Row>
						<Col lg={6}>
							<div class="about_us">
							<h4>ABOUT US</h4>
							<h3>Boulder<i> Bike Tour</i></h3>
							<p>Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado at the foot of the Rocky Mountains. It's the Boulder Bike Tour, and it's coming up in 2020! </p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<p>Luctus venenatis lectus magna fringilla. Vestibulum lectus mauris ultrices eros in cursus turpis. Dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor. Rhoncus aenean vel elit scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
							</div>
						</Col>
						<Col lg={6}><img class="rocky_logo" src={rocky_logo}></img></Col>
					</Row>
					
					<Row><Col lg={12}><div class='counter'><Counter /></div></Col></Row>
				</Container>
			</Jumbotron>
			
			</div>
			
		);
	}
}
export default Home;