import React from "react";
import no_user from "../images/no-user.jpg";
import { Card, Button, Container } from "react-bootstrap";



class Rider extends React.Component {
	render() {
    	return (
            <Container>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={no_user} />
                <Card.Body>
                    <Card.Title>{this.props.rider.first_name} {this.props.rider.last_name}</Card.Title>
                    <Card.Text>
                    <i class="fas fa-map-marker-alt"></i> {this.props.rider.city}, {this.props.rider.state}
                    </Card.Text>
                    <Button variant="danger" href='/'>Find Location</Button>
                </Card.Body>
                </Card>
			</Container>
        );
	}
}
export default Rider;