import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Thankyou.css";


class Thankyou extends React.Component {
	render() {
		return (
            <Jumbotron id="thankyou_background">
                <h1 id='thankyou_title'>Slogan Submission</h1>
                <p id='thankyou_p'>Your slogan submission was successful! Thank you for participating in the contest.
                You will be made aware of the results 1 month before the race via e-mail.</p>
                <Button variant="danger" href='/'>Return to HomePage</Button>
            </Jumbotron>
		)
	}
}

export default Thankyou;