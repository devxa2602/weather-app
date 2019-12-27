import {GET_CITY,FETCH_WEATHER,FETCH_WEATHER_ZIP,SET_LOADING,GET_ZIP} from '../actions/types'
import axios from 'axios'
// import {APIKey} from '../APIKEY'
export const getCity=text=>dispatch=>{
	dispatch({
		type:GET_CITY,
		payload:text
	})
}
export const getZip=text=>dispatch=>{
	dispatch({
		type:GET_ZIP,
		payload:text
	})
}
export const fetchWeather=text=>dispatch=>{
	axios.get(`http://localhost:5000/location/${text}`)
	.then((response)=>dispatch({
		type:FETCH_WEATHER,
		payload:response.data
	}))
	.catch(err=>{
		console.log(err)
	})
	
}
export const fetchWeatherZip=pin=>dispatch=>{
	axios.get(`http://localhost:5000/weather/${pin}`)
	.then((response)=>dispatch({
		type:FETCH_WEATHER_ZIP,
		payload:response.data
	}))
	.catch(err=>{
		console.log(err)
	})
	
}
export const setloading=()=>dispatch=>{
	dispatch({
		type:SET_LOADING
	})
}