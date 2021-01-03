import React, { Component } from 'react';
import axios from 'axios';

export default class TodayWeather extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=3e026282f481d4c890b627f1ab9f887f')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
    
  render() {
    const data = this.state.data;
      if(Object.keys(data).length !== 0) {
        return (
          <div className="img-container">
            <div className="img">
              <img src="" alt=""/>
            </div>
            <div className="current-weather">
              <p>Aujourd'hui</p>
              <h1>Lens</h1>
              <p>Température: {this.state.data.daily[0].temp.day}°C</p>
              <p>{this.state.data.daily[0].weather[0].description}</p>
            </div>
          </div>
        )
      }
      else {
        return (<p>Chargement...</p>)
      }
  }
}