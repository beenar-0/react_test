import OrderForm from "../components/UI/OrderForm/OrderForm";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import React, {useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import classes from "../components/UI/MyCard/MyCard.module.css";

const Cart = ({addedPosts, setAddedPosts}) => {

    const [fetching, isLoading, error] = useFetching(async () => {
        await PostService.sendOrder(order)
    })
    const [order, setOrder] = useState({name: '', address: '', email: '', phoneNumber: '', dosimeters: addedPosts})
    console.log(order.dosimeters)

    let price = 0
    return (
        <div className="cart__wrapper">
            {!addedPosts.length
                ? <div className="emptyCart__msg">Your cart is empty!</div>
                : isLoading
                    ? <Spinner animation="border" variant="warning" style={{width: 100, height: 100, margin: 50}}/>
                    : error
                        ? error
                        : <div className="cart__container">
                            <ul className="cart__list">
                                {
                                    addedPosts.map((post) => {
                                        price += +post.price
                                        return <li key={post._id} className="cart-item">
                                            <div className="cart-item__container">
                                                <div className={"cart-item__img"}
                                                     style={{backgroundImage: `url(${post.img})`}}></div>
                                                <div className="cart-item__info">
                                                    <div className="cart-item__name">{post.name}</div>
                                                    <div className="cart-item__param-container">
                                                        <div className="cart-item__param">Measurement range:</div>
                                                        <div className="cart-item__dots"></div>
                                                        <div className="cart-item__value">{post.measurementRange}</div>
                                                    </div>
                                                    <div className="cart-item__param-container">
                                                        <div className="cart-item__param">Energy range:</div>
                                                        <div className="cart-item__dots"></div>
                                                        <div className="cart-item__value">{post.energyRange}</div>
                                                    </div>
                                                    <div className="cart-item__param-container">
                                                        <div className="cart-item__param">Protection class:</div>
                                                        <div className="cart-item__dots"></div>
                                                        <div className="cart-item__value">{post.protectionClass}</div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__price">{post.price}$</div>
                                                <button className="delete_cart-item" onClick={() => {
                                                    setAddedPosts(addedPosts.filter((p) => {
                                                        return p._id !== post._id
                                                    }))
                                                }}></button>
                                            </div>
                                        </li>
                                    })
                                    }
                                    </ul>
                                        <div className="cart__totalPrice">
                                            Total: {price}$
                                        </div>
                                        <OrderForm
                                            setAddedPosts={setAddedPosts}
                                            fetching={fetching}
                                            order={order}
                                            setOrder={setOrder}
                                        />
                                    </div>
                                    }
                                    </div>

                                    );
                                };

                                export default Cart;