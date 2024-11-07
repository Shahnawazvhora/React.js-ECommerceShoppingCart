import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPlusCircle,
    faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { remove, clearCart } from "../redux/slice/CartSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const { cartItem } = useSelector((cart) => cart);
    const [itemCounts, setItemCounts] = useState(cartItem.map(() => 1));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveItems = (id) => {
        const indexToRemove = cartItem.findIndex((item) => item.id === id);
        dispatch(remove(id));
        setItemCounts((prevCount) => [...prevCount.slice(0, indexToRemove), ...prevCount.slice(indexToRemove + 1), ]);
        toast.error("Item remove from cart");       
    };

    const totalPrice = cartItem.reduce((accumulator, item, index) => {
        const itemCount = itemCounts[index];
        const itemPrice = Number(item.price)
        return accumulator + itemPrice * itemCount;
    }, 0);

    const handleCheckOut = () => {
        toast.success("Thank you for shopping with us! Your order has been placed successfully.");
        dispatch(clearCart());
        setItemCounts([]);
        navigate("/");
    }

    return (
        <>
            <div className="container pt-5">
                <div className="row mt-5">
                    <div className="col-md-8" >
                        {
                            cartItem.map((item, index) => {
                                const itemCount = itemCounts[index];
                                return (
                                    <div className="card mb-3 shopping-item-box" key={index}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img
                                                        src={item.image}
                                                        className="img-fluid rounded-start shopping-image m-auto d-block"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col-md-8">
                                                    <h5 className="card-title shopping-title fst-italic">
                                                        {item.title.length < 30
                                                            ? item.title
                                                            : item.title.substring(0, 70) + "..."}
                                                    </h5>
                                                    <p className="card-text fst-italic">
                                                        {item.description.length < 200
                                                            ? item.description
                                                            : item.description.substring(0, 100) + "..."}
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between shopping-cart">
                                                        <h5 className="text-start text-price">{`Price:${item.price} $`}</h5>
                                                        <button
                                                            className="btn btn-danger border-0"
                                                            onClick={() => {
                                                                handleRemoveItems(item.id);
                                                            }}
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>

                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <button className="btn btn-primary btn-color border-0"
                                                                onClick={() => {
                                                                    setItemCounts(prevCount => {
                                                                        const newCounts = [...prevCount];
                                                                        newCounts[index] += 1;
                                                                        return newCounts;
                                                                    });
                                                                }}>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </button>

                                                            <h5 className="fw-bold px-3">{itemCount}</h5>

                                                            <button className="btn btn-primary btn-color border-0"
                                                                onClick={() => {
                                                                    setItemCounts(prevCount => {
                                                                        const newCounts = [...prevCount];
                                                                        newCounts[index] = Math.max(newCounts[index] - 1, 1);
                                                                        return newCounts;
                                                                    });
                                                                }}>
                                                                <FontAwesomeIcon icon={faMinusCircle} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="col-md-4">
                        <div className="card-total">
                            <div className="card-body card-cartotal-title">
                                <h3 className="card-title fst-italic fw-normal">Your Cart Summary</h3>
                                <h3 className="card-title fw-normal">Total Items: {cartItem.length}</h3>
                                <h2 className='cart-title'>Total Amount: ${totalPrice.toFixed(2)}</h2>
                                <button className='btn btn-primary checkout-btn border-0' onClick={handleCheckOut}>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
