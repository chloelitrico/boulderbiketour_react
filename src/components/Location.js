import React from "react";
import axios from 'axios';
import { Jumbotron } from "react-bootstrap";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class Location extends React.Component {
	  
	render() {
    	return (
			<Jumbotron >
                
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />
                
			</Jumbotron>
		);
	}
}
export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(Location);