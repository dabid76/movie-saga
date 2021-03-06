import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIE', getPic);
    yield takeEvery('GET_DETAILS', getDetails);
    yield takeEvery('NEW_INFO', newIfno);
} // end rootSage

function* newIfno(action){
    try{
      yield axios.put('/movies', action.payload);
    }catch(error){
      console.log('error updating new info', error);
    } // end try
  } // end newInfo saga

function* getPic(){
    try {
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch(error) {
        console.log('error while getting movies', error);
    } // end try
  } // end getPic saga

  function* getDetails(action) {
    try {
        let response = yield axios.get(`/film/${action.payload}`)
        yield put({type: 'SET_GENRES', payload: response.data})
    } catch (error) {
        console.log('error with getting the details', error); 
    } // end try
} // end getDetails saga

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    } // end switch
} // end movies

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    } // end switch
} // end genres

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
); // end storeInstance

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
