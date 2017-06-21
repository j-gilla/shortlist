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
       data.widgets = res.data[0].acf.widgets[0].paragraph;


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
        <p>{this.state.data.widgets}</p>
      </div>
    );
  }
}

export default Widgets;
