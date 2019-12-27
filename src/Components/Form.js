import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getCity,setloading,fetchWeather,fetchWeatherZip,getZip} from '../actions/searchAction';
class Form extends Component {
  onChange = e => {
    this.props.getCity(e.target.value);
  }
  // onZipChange=e=>{
  //   this.props.getZip(e.target.value);
  // }
  
  onSubmit = e => {
    e.preventDefault();
    console.log("clicked")
    if(this.props.text){
      this.props.fetchWeather(this.props.text);
	  this.props.setloading()
    }else{
      this.props.fetchWeatherZip(this.props.zip);
      this.props.setloading()
    }
   
  };
  render(){
  return (
    <div>
    <form className='mt-10' onSubmit={this.onSubmit} >
    <label htmlFor="sel1">Select City:</label>
    <select className='ml-4 select-picker' data-container="body" data-width="auto" value={this.props.text} onChange={this.onChange}>
					{this.props.cities.map(option=>(
						<option key={option} value={option}>
							{option}
						</option>))}
				</select>
      {/* <input onChange={this.onZipChange}className='ml-4' type='text'/> */}
		<button className='ml-4'>Get Weather</button>
    </form>
     </div>
  )
  }
}
  const mapStateToProps = state => ({
    text: state.weather.value,
    cities:state.weather.cities,
    zip:state.weather.zip
  });
  
  export default connect( mapStateToProps, { getZip,fetchWeatherZip,getCity,fetchWeather,setloading })(Form);