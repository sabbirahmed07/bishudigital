import {createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
const initialState = {};
const enhance = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 

const store = createStore(rootReducer, initialState , compose(applyMiddleware(...middleware),enhance));

export default store;