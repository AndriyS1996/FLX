import React, { Component } from 'react';
import { render } from 'react-dom';
import FetchMozartTracks from './fetchData';

// Entry point for styles
import './scss/index.scss';

const rootNode = document.getElementById('root');

// Entry point for the application
class App extends Component {
  render() {
    return(
        <div className='main-wrapper'>
              <h2>Playlist</h2>
              <FetchMozartTracks />
        </div>
    ) 
  }
} ;

render(
  <App />,
  rootNode,
);
