import React from "react";
import { Navbar } from "react-bootstrap";
import "./Navigation.css";


class Footer extends React.Component {
	render() {
    	return (  
        <Navbar sticky="bottom" bg="dark" variant="dark">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                © 2019 Copyright :<a href="/">Boulder Bike Tour</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Footer;
