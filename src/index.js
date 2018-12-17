import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('FETCH_PROJECTS', fetchProjects);
yield takeEvery('FETCH_TAGS', fetchTags);
yield takeEvery('DELETE_PROJECTS', deleteProjects);
yield takeEvery('POST_PROJECTS', postProjects)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//sagas

function* fetchProjects(){
    const projectList = yield call(axios.get,'/projects');
    yield dispatch({ type : 'SET_PROJECTS', payload: projectList.data })
}//end fetchProjects

function* fetchTags(){
    const tagList = yield call(axios.get, '/tags');
    yield dispatch({ type : 'SET_TAGS', payload: tagList.data})
}// end fetchTags

function* deleteProjects(action) {
    try {
        yield call(axios.delete, `/projects/${action.payload}`);
        yield dispatch({type: 'FETCH_PROJECTS'});
    } catch(error) {
        console.log(error);
    }
} // end deleteProjects

function* postProjects(action) {
    try {
        yield call(axios.post, '/projects', action.payload)
        yield dispatch({type: 'FETCH_PROJECTS'})
    } catch(error) {
        console.log(error);
    }
} // end postProjects

//end sagas

//reducers
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
//end reducers
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
