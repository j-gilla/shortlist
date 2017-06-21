import React, { Component } from 'react';
import axios from 'axios';

class Date extends React.Component {
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
      data.date = res.data[0].date
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
          <p>{this.state.data.date}</p>
      </div>
    );
  }
}
export default Date;
