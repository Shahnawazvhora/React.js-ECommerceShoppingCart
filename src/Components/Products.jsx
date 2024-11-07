import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";

const Products = ({ item }) => {
  const { cartItem } = useSelector((cart) => cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Remove From Cart");
  }

  return (
    <div className="card product-card">
      <div className="card-body">
        <h5 className="card-title product-title fst-italic">
          {item.title.length < 30
            ? item.title
            : item.title.substring(0, 70) + "..."}
        </h5>
        <p className="card-text fst-italic">
          {item.description.length < 100
            ? item.description
            : item.description.substring(0, 70) + "..."}
        </p>
        <img
          className="card-img-top product-img m-auto d-block"
          src={item.image}
          alt="Product-images"
        />
        <h5 className="text-center ms-3 text-primary text-price my-4">{`Price:${item.price} $`}</h5>
        <div className="text-center">

          {cartItem.some((p) => p.id === item.id) ? (
            <button
              type="button"
              className="btn btn-danger fs-6 mb-3 "
              onClick={() => {
                removeFromCart(item.id)
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary fs-6 mb-3 btn-add-cart btn-color border-0"
              onClick={() => {
                addToCart(item);
              }}
            >
              Add To Cart
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Products;
