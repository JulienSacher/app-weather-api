import React, { Component } from "react";
import './App.css';
import TodayWeather from './TodayWeather';
import OtherdayWeather from "./OtherdayWeather";

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className="location">
            <input type="text" className="long" placeholder="Longitude"/>
            <input type="text" className="lat" placeholder="Latitude"/>
          </div>
          <TodayWeather/>
          <OtherdayWeather/>
        </div>
      );
  }
}

export default App;