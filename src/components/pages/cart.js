"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {Modal,Card, Col,Row, Button, Image, Container, ButtonGroup, Label} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart} from'../../actions/cartActions';

class Cart extends React.Component{


    onDelete(_id){


            const currentBookToDelete =this.props.cart; 
            const indexToDelete =currentBookToDelete.findIndex(
            function(cart){
                return cart._id ===_id;
            })
            let cartAfterDelete = [...currentBookToDelete.slice(0,indexToDelete),
            ...currentBookToDelete.slice(indexToDelete +1)]
        this.props.deleteCartItem(cartAfterDelete);
    }
            onIncrement(_id){
                        this.props.updateCart(_id, 1);
                    }
            onDecrement(_id, quantity){
                        if(quantity > 1){
                        this.props.updateCart(_id, -1);
                    }
                 }

                 constructor(){
                    super();
                        this.state = { showModal:false}
                    }
                open(){
                    this.setState({showModal:true})
                }
                close(){
                    this.setState({showModal:false})
                }
                 

        render(){
            if(this.props.cart[0]){
                return this.renderCart();
                  } else {
                return this.renderEmpty();
                }
        }
            renderEmpty(){
                return(<div></div>)
            }
            renderCart(){
                const cartItemsList =this.props.cart.map((cartArr)=>{
                    return(
                        <Card className="cardforitem" key={cartArr._id}>
                            
                            <Row>
                                <Col  xs={12} sm={2}>
                
                                <Card.Img className='thumbnail' src={'images/' + cartArr.image}/>
                                
                            
                                </Col>
                                
                                <Card.Body>
                               

                                <Col xs={6} sm={12}>
                              <Row className="Cartitmebody">
                             
                              <Col xs={6} sm={5}>
                                    <h6>{cartArr.title}</h6>
                                    <p className='cartitemnum'>{cartArr.num}</p>
                                    </Col>
                                    
                                    <Col xs={6} sm={3}>
                                        
                                    <h6><Button className='Decrement' onClick={this.onDecrement.bind(this,cartArr._id, cartArr.quantity)} variant="default" size="sm"><b>-</b></Button>
                                    &nbsp;
                                   <span className='Qty'>
                                        {cartArr.quantity}
                                    </span>
                                    &nbsp;
                                    <Button className='Increment' onClick={this.onIncrement.bind(this,cartArr._id)} variant="default"  size="sm"><b>+</b></Button>
                                        </h6>
                                    </Col>

                                    <Col xs={6} sm={4}>
                                    <h6>$ {cartArr.price}
                                    &nbsp; &nbsp; &nbsp;
                                    <Button  onClick={this.onDelete.bind(this,cartArr._id)} variant="default" size="sm"><b>x</b></Button>
                                   
                                    </h6>
                                   </Col>
                                 
                                 </Row>
                               
                                
                                
                                </Col>
                           
                            
                              
                                </Card.Body>
                             </Row>
                        </Card>
                           
                                
                        )
                    },this)
                return(
                <Card header="Cart" className='cardcart'>
                    <Card.Title>Shopping Cart</Card.Title>
                    <Card.Body>
                      {cartItemsList}
                      <Row>
                        <Col xs={12} >
                            <Row>
                        <Col xs={6} sm={4} >
                        <Button  onClick={this.open.bind(this)}  variant="defalt" size="sm">
                        PROCEED TO CHECKOUT
                        </Button>
                        
                        
                        </Col>
                        <Col xs={6} sm={4} >
                        <h6 className='totalam'>Total amount: {this.props.totalQty}</h6> 
                        </Col>
                        <Col xs={6}  sm={4}>
                        <h6 className='subtotal'>total $: {this.props.totalAmount}</h6>
                        </Col>
                        </Row>
                        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                            <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6></h6>
                                <p></p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Col>
                                <h6>total $: {this.props.totalAmount}</h6>
                                </Col>
                                <Button onClick={this.close.bind(this)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                     </Row>
                    </Card.Body>
                </Card>
                )
            }
    }
        function mapStateToProps(state){
            return{
            cart: state.cart.cart,
            totalAmount: state.cart.totalAmount,
            totalQty: state.cart.totalQty,
            }
        }
        function mapDispatchToProps(dispatch){
                return bindActionCreators({
                    deleteCartItem,
                    updateCart
                }, dispatch)
            }
export default connect(mapStateToProps,mapDispatchToProps)(Cart); 