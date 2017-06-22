import React, { Component } from 'react';
import axios from 'axios';

class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get(`../../dummydata.json`)
    .then(res => {
      const data = {}
      data.onePara = res.data[0].acf.widgets[0].paragraph;
      data.twoPara = res.data[0].acf.widgets[3].paragraph;
      this.setState({ data });
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.data.onePara} <br /> 
        {this.state.data.twoPara}
      </div>
    );
  }
}

export default Widgets;
