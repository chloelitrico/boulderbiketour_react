import React from 'react'
import { compose, withProps } from 'recompose'
import axios from 'axios';
import MarkerWithInfoWindow from './MarkerWithInfoWindow.js'

import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from 'react-google-maps'


  const MapWithMarkers = compose(
      withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCd0qL6aJy9bUq1FJDo781iTc-UiaWnnzo&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `800px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
      
  )(props =>
      <GoogleMap
          defaultZoom={12.5}
          defaultCenter={{ lat: 40.0150, lng: -105.2705}}>
            {props.markers.map(marker => (
          <MarkerWithInfoWindow key={marker.index} position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }} content={marker.first_name +' '+ marker.last_name} info={marker.city + ', ' + marker.state}/>
            ))}
          </GoogleMap>
  );
  
class RidersLocation extends React.PureComponent {
  componentWillMount() {
    this.setState({ riders: [] })
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
      <MapWithMarkers markers={this.state.riders} />
    )
  }
}

export default RidersLocation;