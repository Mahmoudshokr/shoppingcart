"use strict"

export var getBooks = (book)=>{
    return {
    type:"GET_BOOKS",
    }
    }

export var postBooks =(book)=>{
    return {
    type:"POST_BOOK",
    payload: book
    }
}

export var deleteBooks = (id)=>{
    return {
    type:"DELETE_BOOK",
    payload: id
    }
}

export var updateBooks = (book)=>{
    return {
    type:"UPDATE_BOOK",
    payload: book
    }
}
