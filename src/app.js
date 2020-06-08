"use strict"

import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers/index';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks}from './actions/booksActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/bookslist';
render(
    <Provider store={store}>
    <BooksList />
    </Provider>, document.getElementById('app')
    );

// store.dispatch(postBooks(
  
//     ))
    // DELETE a book
//     store.dispatch(deleteBooks({id: 1}))
//     // UPDATE a book
//     store.dispatch(updateBooks({
//     id: 2,
//     title:'Learn React in 24h'
//     }
//     ))

// //-->> CART ACTIONS <<--
// store.dispatch(addToCart([{id: 1}]))
