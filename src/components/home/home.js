import React, { Component } from 'react';
import { data } from '../../data/api';
import  { Card } from '../card/card';
import Navbar from '../navbar/navbar';
import './home.css';

export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            books: data,
            items: 0,
            price: 0,
            cart: []
        }
    }

    sortBy = (key) => {
        this.setState({ books: [...data].sort((a, b) => a[key] - b[key]) });
    }

    reset = () => {
        this.setState({
            books: data,
            items: 0,
            price: 0,
            cart: []
        })
    }

    addToCart = (cost, bookID) => {
        this.setState({
            price: this.state.price + cost,
            items: this.state.items + 1,
            cart: [...this.state.cart, bookID]
        })
    }

    render() {
        return (
        <div>
            <Navbar price={this.state.price} items={this.state.items}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="dropdownContainer">
                            <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Sort Filter</button>

                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#" onClick={() => this.sortBy('average_rating')}>Rating</a>
                                <a className="dropdown-item" href="#" onClick={() => this.sortBy('price')}>Price</a>
                                <a className="dropdown-item" href="#" onClick={() => this.sortBy('ratings_count')}>Rating Count</a>
                            </div>
                        </div>
                        <div className="resetButton">
                            <button type="button" className="btn btn-primary" onClick={() => this.reset()}>Reset</button>
                        </div>
                    </div>
                        { 
                            this.state.books.map(val => {
                                return <Card key={val.bookID} bookID={val.bookID} title={val.title} author={val.authors} rating={val.average_rating} cost={val.price} addToCart={this.addToCart} cart={this.state.cart}/>
                            })
                        }
                </div>
            </div>
        </div>
        )
    }
}
