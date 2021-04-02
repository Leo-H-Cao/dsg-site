import React from "react";
import "./css/InfoWindow.css";

class InfoWindow extends React.Component {
  render = () => (
    <div className="info">
      <div style={{ fontSize: 16 }}>{this.props.title}</div>
    </div>
  );
}

export default InfoWindow;
