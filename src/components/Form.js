import React from "react";
import axios from 'axios';
import { Jumbotron, Form, Button, Col } from "react-bootstrap";
import "./Form.css";


class SloganForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    state = {
        first_name: '',
        last_name: '',
        email: '',  
        description: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

    handleSubmit(event) {
        event.preventDefault();

        const slogan = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            description: this.state.description
        } 

        console.log(slogan);
        
        axios
            .post('http://localhost:3001/api/v1/slogans', {slogan: slogan})
            .then(response => {
              console.log(response);
              console.log(response.data);
              window.location.href = "/thankyou";
            })
    }



	render() {
		return (
            <Jumbotron id="form_background">
                <h1 id='form_title'>Slogan Submission</h1>
                <p id='form_p'>BoulderBikeTour is looking for a catchy slogan to complement the logo that represents what
the Boulder Bike Tour is all about. As part of the celebration of 100 years of the Bike Race in April, the logo
will be presented along with a slogan and it could be yours! Enter the contest for a chance to win a 40$ gift card!</p>
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required onChange={this.handleChange} id="first_name" name="first_name" type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required onChange={this.handleChange} id="last_name" name="last_name" type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required onChange={this.handleChange} id="email" name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridSlogan">
                    <Form.Label>Slogan</Form.Label>
                    <Form.Control required onChange={this.handleChange} as="textarea" rows="3" id="description" name="description" placeholder="Enter your slogan"/>
                </Form.Group>

                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
            </Jumbotron>
		)
	}
}

export default SloganForm;