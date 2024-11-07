import React from 'react'
import Navbar from './Navbar'
import emptyCard from "../images/empty-cart.jpg";
import { Link } from 'react-router-dom';

const EmptyCard = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center'>
                <img src={emptyCard} className="card-img-top empty-cart-img mt-5,M MQF<M<" alt="..." />
            </div>
            <h1 className='text-center fst-italic'>Kuch to kharid lo</h1>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger btn-buy-now'><Link to="/">Buy Now</Link></button>
            </div>
        </div>
    )
}

export default EmptyCard
