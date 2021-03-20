import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const Maps = () => {

    return (

        <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
        </Map>

    );
};


export default GoogleApiWrapper({
    apiKey: ("AIzaSyBnQy6n1jwaUQ5PV - P2iOiScVbtaTb - LX8")
})(Maps)
