"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from'../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Container , Col, Row, Button} from'react-bootstrap';
import Bookitem from './bookitem';
import Cart from './cart';

class BooksList extends React.Component{
    componentDidMount(){
        this.props.getBooks()
        }
    render(){
        const booksList = this.props.books.map((booksArr)=>{
        return(<Col xs={12} sm={6} md={6} key={booksArr._id}>
            <Bookitem _id= {booksArr._id} title={booksArr.title}
            image={booksArr.image} description={booksArr.description} num={booksArr.num} price={booksArr.price}/>
            </Col> )
        })
        return(
            <Container className='wholecontainer'>
                <Row>
                    <Cart />
                </Row>

                <Row>
                 {booksList}
                </Row>
            </Container>
                )
                }
                    }
                    function mapStateToProps(state){
                        return{
                            books: state.books.books
                               }
                         }
                    function mapDispatchToProps(dispatch){
                            return bindActionCreators({
                                getBooks}, dispatch)
                        }
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);