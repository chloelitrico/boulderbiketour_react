import React from "react";
import { Jumbotron, Form, Button, Col } from "react-bootstrap";


class SubmissionForm extends React.Component {
	render() {
		return (
            <Jumbotron>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridSlogan">
                    <Form.Label>Slogan</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Enter your slogan"/>
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
            </Jumbotron>
		)
	}
}

export default SubmissionForm;