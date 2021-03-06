import React, { Component } from 'react';

import Title from './Title.jsx';
import Date from './Date.jsx';
import Author from './Author.jsx';
import Sell from './Sell.jsx';
import Category from './Category.jsx';
import Widgets from './Widgets.jsx';
import HeroImages from './HeroImages.jsx';



class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Shortlist Studio</h1>
        <Title />
        <Date />
        <Author />
        <Category />
        <Sell />
        <HeroImages />

        <Widgets />

      </div>
    );
  }
}

export default App;
