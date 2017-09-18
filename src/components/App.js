import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from '../components/EarthquakeList';
import EarthquakeInfo from '../components/EarthquakeInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>
          <EarthquakeInfo />
          <EarthquakeList />
          </div>
      </div>
    );
  }
}

export default App;
