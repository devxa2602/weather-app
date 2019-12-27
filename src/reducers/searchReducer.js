import {GET_CITY,FETCH_WEATHER,FETCH_WEATHER_ZIP,SET_LOADING,GET_ZIP} from '../actions/types'

const initialState={
	value : "",
	data:"",
	loading:false,
	cities:['Houston','Chicago','Denver','Seattle'],
	zip:""
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_CITY:
			return{
				...state,
				value:action.payload,
				loading:false
			}
			case GET_ZIP:
			return{
				...state,
				zip:action.payload,
				loading:false
			}
		case FETCH_WEATHER:
			return{
				...state,
				data:action.payload,
				loading:false
			}
		case FETCH_WEATHER_ZIP:
			return{
				...state,
				data:action.payload,
				loading:false
			}
		case SET_LOADING:
			return{
				...state,
				loading:true
			}
		default:
			return state
	}
}