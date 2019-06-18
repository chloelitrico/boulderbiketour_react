import React from "react";
import axios from 'axios';
import { Jumbotron, Form, Button, Col } from "react-bootstrap";


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
            })
      }

	render() {
		return (
            <Jumbotron>
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={this.handleChange} id="first_name" name="first_name" type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={this.handleChange} id="last_name" name="last_name" type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.handleChange} id="email" name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridSlogan">
                    <Form.Label>Slogan</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" rows="3" id="description" name="description" placeholder="Enter your slogan"/>
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
            </Jumbotron>
		)
	}
}

export default SloganForm;