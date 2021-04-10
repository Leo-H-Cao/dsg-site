import "./css/Map.css";

import React from "react";

export default class Map extends React.Component {
  render = () => {
    return (
      <div className="map">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1j8RBMxs4v1zx-l4sAKN9fzDi9AI1MW2z"
          width="1200"
          height="700"
        ></iframe>
      </div>
    );
  };
}
