import GoogleMapReact from "google-map-react";
import "./css/Map.css";
import axios from "axios";
import Marker from "./Marker";
import React from "react";
import InfoWindow from "./InfoWindow";

export default class Map extends React.Component {
  state = {
    restaurants: [],
    selectedPlace: "",
    showingInfoWindow: false,
    selectedPlaceId: 1,
  };

  componentDidMount() {
    axios
      .get("https://strapi-dsg-api.herokuapp.com/eateries")
      .then((res) => this.setState({ restaurants: res.data }));
  }

  render = () => {
    return (
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBiKyKpE5LGCho-y-3CBlh6OPE6WqxQMK0",
            }}
            defaultCenter={this.props.location}
            defaultZoom={this.props.zoomLevel}
          >
            {this.state.restaurants.map((restaurant) =>
              this.renderMarker(restaurant)
            )}
            <InfoWindow
              lat={
                this.state.restaurants[this.state.selectedPlaceId - 1]?.xCoord
              }
              lng={
                this.state.restaurants[this.state.selectedPlaceId - 1]?.yCoord
              }
              title={this.state.selectedPlace}
              visible={this.state.showingInfoWindow}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  };

  handleMarkerClick = (e) => {
    console.log(e.target);
    console.log(this.state.restaurants);
    this.setState({
      selectedPlace: e.target.title,
      selectedPlaceId: e.target.id,
      showingInfoWindow: true,
    });
  };

  renderMarker = (restaurant) => {
    return (
      <Marker
        key={restaurant.id}
        lat={restaurant.xCoord}
        lng={restaurant.yCoord}
        name={restaurant.name}
        restaurantId={restaurant.id}
        onClick={this.handleMarkerClick}
      />
    );
  };
}
