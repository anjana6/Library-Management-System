import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from  './configureStore'
import App from './App';


ReactDOM.render(
    <Provider store={configureStore}>
        <App/>  
    </Provider>,
    document.querySelector('#root')
    
)