import React, { Component } from 'react';
import fetchImages from '../../utils/fromJSON.js'
import axios from 'axios';

class HeroImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get(`../../dummydata.json`)
    .then(res => {
      const images = res.data[0].acf.hero_images[0].url;
      this.setState({ images });
      console.log(images);
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    return (
      <div>
        <h1>Hero Images</h1>
          <ul>
            {this.state.images}
          </ul>
      </div>
    );
  }
}



export default HeroImages;
