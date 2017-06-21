import React, { Component } from 'react';
import axios from 'axios';

class Author extends React.Component {
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
      data.author = res.data[0].author
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
          <p>{this.state.data.author}</p>
      </div>
    );
  }
}
export default Author;
