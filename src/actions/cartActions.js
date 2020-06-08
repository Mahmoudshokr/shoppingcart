"use strict"

export var addToCart = (book)=>{
    return {
    type:"ADD_TO_CART",
    payload: book 
    }
}


export var deleteCartItem = (cart)=>{
    return {
    type:"DELETE_CART_ITEM",
    payload: cart 
    }
}

export var updateCart = (_id, unit)=>{
    return {
    type:"UPDATE_CART",
    _id: _id,
    unit: unit
    }
}
