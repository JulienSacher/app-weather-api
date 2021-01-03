import React, { Component } from 'react';
import axios from 'axios';

export default class OtherdayWeather extends Component {
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
                <div className="next-days-container">
                    <div className="next-days">
                        <p><strong>Mardi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[1].temp.day}°C</p>
                    </div>
                    <div className="next-days">
                        <p><strong>Mercredi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[2].temp.day}°C</p>
                    </div>
                    <div className="next-days">
                        <p><strong>Jeudi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[3].temp.day}°C</p>
                    </div>
                    <div className="next-days">
                        <p><strong>Vendredi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[4].temp.day}°C</p>
                    </div>
                </div>
            )
        }
        else {
            return (<p>Chargement...</p>);
          }
    }
}