import React from "react";
import axios from 'axios';
import Rider from './Rider.js'
import { Jumbotron } from "react-bootstrap";
import "./Information.css";

class Information extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
		  riders: []
		}
	  }

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/riders.json')
		.then(response => {
		  console.log(response)
		  this.setState({riders: response.data})
		})
		.catch(error => console.log(error))
	}
	  
	render() {
    	return (
			<Jumbotron >
				<h1 id='rider_title'>Rider Information</h1>
					<div className="all_riders">
						{this.state.riders.map((rider, key) => 
							<div className="rider_info">
								<Rider rider={rider} key={rider.id} />
							</div>
						)}
					</div>
			</Jumbotron>
		);
	}
}
export default Information;