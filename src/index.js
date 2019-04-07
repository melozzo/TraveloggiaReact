import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose }  from 'redux';
import reducer from './Store/reducer'
import createSagaMiddleware from 'redux-saga';
import { watcherSagas } from './Store/watcherSagas'
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';


// install redux dev tools chrome extension - good grief - copied from the website
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore( reducer, composeEnhancers(
    applyMiddleware( sagaMiddleware )
) );



sagaMiddleware.run( watcherSagas );

ReactDOM.render( <Provider  store = { store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
