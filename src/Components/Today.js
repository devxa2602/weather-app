import React,{Component} from 'react';
import { connect } from 'react-redux';
import {setloading} from '../actions/searchAction';
class Today extends Component {
    render(){
    let show=null 
    var mydate=new Date()
							var year=mydate.getYear()
							if(year<1000)
							year+=1900
							var day=mydate.getDay()
							var month=mydate.getMonth()
							var daym=mydate.getDate()
							if(daym<10)
							daym="0"+daym
							var dayarray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
							var montharray=["January","February","March","April","May","June","July","August","September","October","November","December"]
							// document.write(""+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+"")
  if(  this.props.data){
	  show=(<div className="city">
      <div className="title">
          <h2>{  this.props.data.title}</h2>
      </div>
      <div className="date-time">
          <div className="dmy">
               <div className="date">
                    <p> {""+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+""}</p>
              </div>
          </div>
          <div className="temperature">
              <p>{  this.props.data.consolidated_weather[0].the_temp.toFixed(1)}°<span>C</span></p>
          </div>
          <div className="clear"></div>
      </div>
  </div>)
    }
        return (
            <div>
                 {show}
             </div>
 )
    } 
}
const mapStateToProps = state => ({
    data: state.weather.data
  });
  
  export default connect( mapStateToProps, { setloading })(Today);
