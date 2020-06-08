"use strict"
import React from 'react';
import {Image, Row, Col , Button} from'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {addToCart, updateCart} from'../../actions/cartActions';

class Bookitem extends React.Component{
    handleCart(){
            const book = [ ...this.props.cart,{
                            _id:this.props._id,
                            title:this.props.title,
                            image:this.props.image,
                            description:this.props.description,
                            num : this.props.num,
                            price:this.props.price,
                            quantity:1
                         }]
                         if(this.props.cart.length > 0) {
                            
                            let _id = this.props._id;
                            let cartIndex =
                            this.props.cart.findIndex(function(cart){
                                    return cart._id === _id;
                            })
                       
                            if (cartIndex === -1){
                                this.props.addToCart(book);
                            } else {                            
                            this.props.updateCart(_id, 1)
                            }
                            } else {
                                this.props.addToCart(book);
                            }
                            }
     
    render(){
     return(
    
        <Row>
            <Col  xs={12} sm={4}>
            <Image src={ '/images/'+ this.props.image} thumbnail />
             
            </Col>

            <Col xs={6} sm={8}>
                <h6>{this.props.title}</h6>
                <p>{this.props.description}</p>
                <h6>$ {this.props.price}</h6>
                <Button  onClick={this.handleCart.bind(this)} className='primary'>Add To Cart</Button>
            </Col>
        </Row>
       
            )
        }
    }

    function mapStateToProps(state){
            return{
                 cart:state.cart.cart
                }
        }
        function mapDispatchToProps(dispatch){
            return bindActionCreators({
                addToCart:addToCart,
                updateCart:updateCart
            }, dispatch)
        }
export default connect(mapStateToProps,mapDispatchToProps)(Bookitem);
