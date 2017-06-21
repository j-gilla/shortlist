import React, { Component } from 'react';
import axios from 'axios';

class HeroImages extends React.Component {
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
      data.sell = res.data[0].acf.sell;
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
        <img src={this.state.data.sell} />
      </div>
    );
  }
}

export default HeroImages;
