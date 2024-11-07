import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItem } = useSelector((cart) => cart);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <Link className="navbar-brand" to="/">
            <img src="https://tse1.mm.bing.net/th?id=OIP.RYwKPeMKqUiHa5B7emHvYQHaHa&pid=Api&P=0" alt="" width="30" height="30" className="d-inline-block align-text-top nav-logo" />
            <span className='position-relative text-white ms-2'>E-Commerce</span>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <Link to="/shoppingCart" className='me-3'>
              <img src="https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png" alt="" className="d-inline-block align-text-top shoping-cart" />
              <span className="position-absolute end-5 translate-middle badge rounded-pill bg-danger cart-count">
                {cartItem.length}
              </span>
            </Link>
            {isAuthenticated ? (
              <button className='btn btn-dark' onClick={() => logout({returnTo: window.location.origin})}>
                Logout
              </button>
            ) : (
              <button className='btn btn-light' onClick={() => loginWithRedirect()}>
                login
              </button>
            )}
        </div>
        {isAuthenticated && <p className='user-auth'>{user.name}</p>}
      </nav>
    </>
  )
}

export default Navbar
