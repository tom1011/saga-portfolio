import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PORTFOLIO', getPortInfo)
    yield takeEvery('REMOVE_PROJECT', deletePort)
    yield takeEvery('ADD_PORTFOLIO', putPortfolio)
}

function* putPortfolio (action){
    try{
    yield axios.post('/api/profile/', action.payload)
    yield put({type: 'GET_PORTFOLIO'})
    yield console.log('in put saga logging action.payload', action.payload)
    }
    catch(error){
        console.log('put', error)
    }

}

function* deletePort (action){
    try{
    yield axios.delete( `api/profile/${action.payload}`)
    yield put({type: 'GET_PORTFOLIO'})
    yield console.log('in delete saga')
  } catch(error){
    console.log('DELETE ', error)
  }
}

function* getPortInfo(action) {
    try {
      const portInfo = yield axios({
        method: 'GET',
        url: '/api/profile/port'
      })
      yield put({type: 'SET_PROJECTS', payload: portInfo.data})
      yield console.log("in get PortInfo", portInfo.data)
    }
    catch (err){
      console.log('in getPortInfo (get)', err)
    }
  }


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
