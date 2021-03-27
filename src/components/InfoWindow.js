import { Card } from "antd";
import React from "react";

class InfoWindow extends React.Component {
  render = () => (
    <Card size="small" style={{ width: this.props.visible ? 300 : 0 }}>
      <h4>{this.props.title}</h4>
    </Card>
  );
}

export default InfoWindow;
