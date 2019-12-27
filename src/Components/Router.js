import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter,Switch,Route}from "react-router-dom";
import App from "../App"
import Detail from "./Detail"
import {store} from'../store'
const Router=()=>{
	return(
	<Provider store={store}>
	<HashRouter >
		<Switch>
			<Route path='/'  component={App} exact/>
		   <Route path='/Weather-details/:id' component={Detail}/>
        </Switch>	
	</HashRouter>
	</Provider>
	)
}
export default Router;