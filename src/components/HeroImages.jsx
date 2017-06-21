import React, { Component } from 'react';
import axios from 'axios';

import HeroImageStyle from '../../styles/HeroImages.js'

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
      data.heroImage = res.data[0].acf.hero_images[0].url;
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
        <HeroImageStyle src={this.state.data.heroImage} />
      </div>
    );
  }
}

export default HeroImages;
