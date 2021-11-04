import React, { Component } from 'react';

class Medications extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <div>{this.props.abc}</div>
    );
  }
};

export default Medications;