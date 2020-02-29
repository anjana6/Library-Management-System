import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';

const middleware = [thunk];
const composeWithEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const  configureStore = createStore(rootReducer,composeWithEnhancer);

if(localStorage.token){
    setAuthToken(localStorage.token);
}

export default configureStore;



