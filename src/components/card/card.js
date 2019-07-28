import React from 'react';
import './card.css';

export const Card = ({bookID, title, author, rating, cost, addToCart, cart}) => (
    <div className="col-sm">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="author"><strong>Author: </strong>{author}</h6>
                <h6 className="rating"><strong>Rating: </strong>{rating}</h6>
                {
                    cart.indexOf(bookID) === -1 ?
                    <button type="button" className="btn btn-primary" onClick={() => addToCart(cost, bookID)}>Add to Cart</button>
                    : 
                    <button type="button" className="btn btn-primary" disabled>Added to Cart</button>
                }
            </div>
        </div>
    </div>
)


