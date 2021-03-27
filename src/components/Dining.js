import React from "react";
import "./css/Dining.css";
import Map from "./Map";

const location = {
  lat: 36.00053,
  lng: -78.91066,
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
