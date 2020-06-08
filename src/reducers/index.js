"use strict"

import {combineReducers} from 'redux';

import {booksreducers} from'./booksreducers';
import {cartreducers} from './cartreducers';

export default combineReducers({
books: booksreducers,
cart: cartreducers
})