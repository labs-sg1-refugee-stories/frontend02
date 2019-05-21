import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { storiesReducer } from './reducers'
import Footer from './components/Footer'

const store = createStore(storiesReducer,applyMiddleware(thunk,logger))

ReactDOM.render(
      
<Provider store={store}>
   
        <App />   
        <Footer></Footer>
   
 
</Provider>
, document.getElementById('root'));


