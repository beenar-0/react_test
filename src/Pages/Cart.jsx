import OrderForm from "../components/UI/OrderForm/OrderForm";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import React, {useState} from "react";
import Spinner from "react-bootstrap/Spinner";

const Cart = ({addedPosts, setAddedPosts}) => {

    const [fetching, isLoading, error] = useFetching(async () => {
        await PostService.sendOrder(order)
    })
    const [order, setOrder] = useState({name: '', address: '', email: '', phoneNumber: '', cats:addedPosts})

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
                                                <div className="cart-item__name">{post.name}</div>
                                                <div className="cart-item__price">{post.price}$</div>
                                            </div>
                                            <button className="delete_cart-item" onClick={() => {
                                                setAddedPosts(addedPosts.filter((p) => {
                                                    return p._id !== post._id
                                                }))
                                            }}></button>
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