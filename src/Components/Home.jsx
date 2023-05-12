import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loaderDots from "../images/loaderdots.gif";
import errorImg from "../images/errorImg.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((response) => {
      setPosts(response.data);
      setLoading(false);
    }).catch(() => {
      setError(true);
      setLoading(false);
    })
  }, []);

  return (
    <>
      <div className="container">
        {
          loading ? (
            <div className="loader-container d-flex align-items-center justify-content-center">
              <div className="text-info">
                <img src={loaderDots} alt="loader" />
              </div>
            </div>
          ) : error ? (
            <div className='errorhandle'>
              <img src={errorImg} alt="error" className='error' />
              <div>
                <button className='btn btn-tryagain me-4'>Try again</button>
                <button className='btn btn-tryagain'>Report an issue</button>
              </div>
            </div>
          ) : (
            <div className="row mt-4">
              {
                posts.map((item, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="card-deck mt-4">
                        <Products key={item.id} item={item} />
                      </div>
                    </div>
                  )
                })
              }
              <button className="btn btn-primary scroll-top" onClick={() => { window.scrollTo(0, 0); }}>
                <FontAwesomeIcon icon={faCircleArrowUp} />
              </button>
            </div>
          )
        }
      </div>

    </>
  )
}

export default Home
