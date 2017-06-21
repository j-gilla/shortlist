import React, { Component } from 'react';
import axios from 'axios';
// import '../../dummydata.json';

class HeroImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImages: []
    };
  }


  omponentDidMount() {
    axios.get(`../../dummydata.json?=acf`)
      .then(res => {
        const images = res.data.data.children.map(obj => obj.data);
        this.setState({ images });
      });
  }

  render() {
    return (
      <div>
        <h1>Hero Image Component</h1>
        {/* {this.state.heroImages} */}
      </div>
    );
  }
}

export default HeroImages;
