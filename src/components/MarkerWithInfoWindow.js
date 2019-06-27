import React from "react";
import { Marker, InfoWindow } from 'react-google-maps';
import './MarkerWithInfoWindow.css'

class MapWithMarkers extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.onToggleOpen = this.onToggleOpen.bind(this);
    }

    onToggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<Marker
            position={this.props.position}
            onClick={this.onToggleOpen}>
            {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
                <div className='location_info'>
                    <h3>{this.props.content}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> {this.props.info}</p>
                </div>
            </InfoWindow>}
        </Marker>)
    }
}

export default MapWithMarkers;