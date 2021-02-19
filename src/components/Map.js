import React from "react";
import GoogleMapReact from "google-map-react";
import "./css/Map.css";

function Map({ location, zoomLevel }) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBiKyKpE5LGCho-y-3CBlh6OPE6WqxQMK0" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
