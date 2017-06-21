import React, { Component } from 'react';
import axios from 'axios';

class Category extends React.Component {
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
      data.category = res.data[0].acf.category.name;
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
        <p>{this.state.data.category}</p>
      </div>
    );
  }
}

export default Category;
