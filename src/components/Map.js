import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "50%",
  height: "50%",
  marginLeft: "25%",
  position: "static",
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        style={style}
        google={this.props.google}
        zoom={4}
        initialCenter={{
          lat: 34.357235,
          lng: 41.1292,
        }}
      >
        <Marker
          title={"Iraq, Anbar"}
          name={"Al Qaim"}
          position={{ lat: 34.357235, lng: 41.1292 }}
        />
        <Marker
          title={"Lebanon"}
          name={"North Lebanon"}
          position={{ lat: 34.435797, lng: 35.825729 }}
        />
        <Marker />
        <Marker
          title={"Turkey"}
          name={"Camp-based Refugees"}
          position={{ lat: 37.177826, lng: 38.781738 }}
        />
        <Marker />

        <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
