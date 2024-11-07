import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCard from './EmptyCard';
import FullCart from './FullCart';

const Cart = () => {
    const { cartItem } = useSelector((cart) => cart);

  return (
    <>
        {
            cartItem.length > 0 ? <FullCart /> : <EmptyCard />
        }
    </>
  )
}

export default Cart
