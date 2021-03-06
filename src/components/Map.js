import React from "react";
import GoogleMapReact from "google-map-react";
import "./css/Map.css";

const Map = function ({ location, zoomLevel }) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBiKyKpE5LGCho-y-3CBlh6OPE6WqxQMK0" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <Marker
            lat={36.001427}
            lng={-78.938232}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

const Marker = function (name) {
  return (
    <div>
      <div className="pin bounce" style={{ cursor: "pointer" }} title={name} />
      <div className="pulse" />
    </div>
  );
};

export default Map;
