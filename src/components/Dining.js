import React from "react";
import "./css/Dining.css";
import Map from "./Map";

const location = {
  lat: 36.001427,
  lng: -78.938232,
};

function Dining() {
  return (
    <div>
      <h1 className="dining-header">DINING</h1>
      <Map location={location} zoomLevel={15} />
    </div>
  );
}

export default Dining;
