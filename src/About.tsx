import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

import logo from './logo.svg';

class About extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About</h1>
        </header>
        <p className="App-intro">
          ABOUT THIS PAGE: nothing to see here :)
        </p>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default About;
