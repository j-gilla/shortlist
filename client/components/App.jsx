import React from 'react';
import axios from 'axios';
import '../../dummydata.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImages: []
    };
  }

  componentDidMount() {
    axios.get(`../../dummydata.acf.hero_images.url`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ heroImages });
      });
  }

  // console.log(this.state)

  render() {
    return (
      <div>
        <h1>Shortlist Studio</h1>
        <h4>Hero Images</h4>

        <ul>
          {this.state.map(heroImage =>
            <li key={heroImage.id}>{heroImage.ur}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
