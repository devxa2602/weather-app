
import React,{Component} from 'react';
// import axios from 'axios'
import { connect } from 'react-redux';
import {setloading} from './actions/searchAction';
import Form from './Components/Form';
import Forecast from './Components/Forecast';
import Today from './Components/Today';
//import './App.css';
// const API_KEY='2dd81da58f92e3571952d07b65b088e5';
class App extends Component{
	// state={
  //   data:"",
  //   cities:['Houston','Chicago','Denver','Seattle'],
  //   value:'New york'
  //   }
  //   FormChangeHandler=(e)=>{
  //     this.setState({value:e.target.value})
  //   }
  //   submitHandler=(e)=>{
  //     e.preventDefault()
  //     axios.get(`http://localhost:5000/location/${this.state.value}`)
  //     .then((res)=>{
  //       this.setState({data:res.data} )
  //       console.log(this.state.data)
  //       })
  //     .catch(err=>console.log(err))
  // }
  
render(){
  var show=null
  if(this.props.data){
        show=<div  className="container" >
        <Today />
        <Forecast/>
      </div>
  }
	return (
    <div>
	    <h1>WEATHER APP</h1>
      <Form />
      {show}
      </div>);
}
  }
  const mapStateToProps = state => ({
    data: state.weather.data
  });

  export default connect( mapStateToProps, { setloading })(App);



