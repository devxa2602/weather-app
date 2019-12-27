import React, { Component } from 'react'
import { connect } from 'react-redux';
import {setloading} from '../actions/searchAction';
export class Detail extends Component {
    render() {
      const index= this.props.data.findIndex(x => x.id.toString() === this.props.match.params.id);
      var dArr = this.props.data[index].applicable_date.split("-"); 
							var montharray=["Janu","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        // const {weather } = this.props.data;
        console.log(this.props)
     
       console.log(index)
    let weatherInfo = (
      <div className="container" style={{padding:'0px'}}>
        <div className="row">
          <div className="col-md-4 forecast-icon">
            <img src={`https://www.metaweather.com//static/img/weather/png/${this.props.data[index].weather_state_abbr}.png`} className="ml-4 " alt="Poster" />
          </div>
          <div className="col-md-8 today-weather">
            <h2 className="mb-4 today-weather">{""+dArr[2]+" "+montharray[dArr[1]-1]+" "+dArr[0]+""}</h2>
            <ul >
              <li>
                <strong>Weather State:</strong> {this.props.data[index].weather_state_name}
              </li>
              <li>
                <strong>Wind Direction:</strong> {this.props.data[index].wind_direction_compass}
              </li>
              <li>
                <strong>Wind Speed:</strong> {this.props.data[index].wind_speed.toFixed(2)}
              </li>
              <li>
                <strong>Temperature:</strong> {this.props.data[index].the_temp}
              </li>
              <li >
                <strong>Humidity:</strong> {this.props.data[index].humidity}
              </li>
              <li >
                <strong>Visibility:</strong> {this.props.data[index].visibility.toFixed(2)}
              </li>
              <li>
                <strong>Air Pressure:</strong> {this.props.data[index].air_pressure}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

        return (
            <div>{weatherInfo}</div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.weather.data.consolidated_weather
  });


export default connect( mapStateToProps, { setloading })(Detail);
