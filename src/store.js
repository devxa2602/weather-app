import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from'./reducers'
//const composeEnhancers = process.env.NODE_ENV ==='development' ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
export const store=createStore(rootReducer,composeWithDevTools(
	applyMiddleware(thunk)
))