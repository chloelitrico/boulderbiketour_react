import React from "react";
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };



class Location extends React.Component {
    
    constructor(props) {
		super(props)
		this.state = {
            riders: [],
            showingInfoWindow: false,
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);

      }

      onMarkerClick = () => {
        this.setState({
          showingInfoWindow: true
        });
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
                
            <Map
                google={this.props.google}
                zoom={12.5}
                style={mapStyles}
                initialCenter={{ lat: 40.0150, lng: -105.2705}}
            >
                {this.state.riders.map((rider, key) => 

                        <Marker 
                        key={this.props.index}
                        label={this.props.index.toString()}
                        onClick = { this.onMarkerClick }
                            position={{ lat: rider.latitude, lng: rider.longitude}} 
                        >


          {
                this.state.showingInfoWindow &&
                <InfoWindow onCloseClick={this.props.handleCloseCall}>
                  <h1>Hi</h1>
                </InfoWindow>
          }

                        </Marker>
                        

                    )}
                    

            </Map>

		);
	}
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCd0qL6aJy9bUq1FJDo781iTc-UiaWnnzo'
  })(Location);