import React from "react";

class Marker extends React.Component {
  render = () => (
    <div onClick={this.props.onClick}>
      <div
        className="pin bounce"
        style={{ cursor: "pointer" }}
        title={this.props.name}
        id={this.props.restaurantId}
      />
    </div>
  );
}

export default Marker;
