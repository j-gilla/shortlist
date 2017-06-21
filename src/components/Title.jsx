import React, { Component } from 'react';
import axios from 'axios';

class Title extends React.Component {
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
      data.title = res.data[0].title.rendered;
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
        <p>{this.state.data.title} </p>
      </div>
    );
  }
}



export default Title;
