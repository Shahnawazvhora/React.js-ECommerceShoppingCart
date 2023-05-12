import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItem } = useSelector((cart) => cart);
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://tse1.mm.bing.net/th?id=OIP.RYwKPeMKqUiHa5B7emHvYQHaHa&pid=Api&P=0" alt="" width="30" height="30" className="d-inline-block align-text-top nav-logo" />
            <span className='position-relative text-white ms-2'>E-Commerce</span>
          </Link>
            <Link to="/shoppingCart">
              <img src="https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png" alt="" className="d-inline-block align-text-top shoping-cart" />
              <span className="position-absolute end-0 translate-middle badge rounded-pill bg-danger cart-count">
                {cartItem.length}
              </span>
            </Link>
          </div>
      </nav>
    </>
  )
}

export default Navbar
