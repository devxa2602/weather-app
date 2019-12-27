import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
import {setloading} from '../actions/searchAction';
class Forecast extends Component {
    render(){
        let show=null
    if(  this.props.data){
        console.log(this.props.data)
        show=(<div className="forecast">
        <div className="forecast-icon">
       <img alt='forecast-icon'src={`https://www.metaweather.com//static/img/weather/png/64/${  this.props.data[0].weather_state_abbr}.png`}/>
        </div>
        <div className="today-weather">
    <h4>{this.props.data[0].weather_state_name}</h4>
            <ul>
    {  this.props.data.map((weather)=>(
    <Link key={weather.applicable_date} to={`/Weather-details/${weather.id}`}>
     <li > {weather.applicable_date} <span>{weather.the_temp.toFixed(2)}°C</span>  </li>
        </Link>))}
            </ul>
        </div>
        </div>
        
    	)
    }
    return (
        <div>
            {show}
            <div className="clear"></div>
        </div>
    	)
    }    
}
const mapStateToProps = state => ({
    data: state.weather.data.consolidated_weather
  });
export default connect( mapStateToProps, { setloading })(Forecast);
