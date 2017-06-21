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
      // data.widgets = res.data[0].acf.widgets;
      // data.date = res.data[0].date;
      // data.author = res.data[0];
      // data.category = res.data[0].acf.category.name;
      // data.sell = res.data[0].acf.sell;
      // data.title = res.data[0].title.rendered;
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
        <img src={this.state.data.heroImage} />
      </div>
    );
  }
}

export default HeroImages;
