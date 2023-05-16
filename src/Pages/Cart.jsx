const Cart = ({addedPosts, setAddedPosts}) => {
    let price = 0
    return (
        <div className="cart__wrapper">
            {addedPosts.length
                ? <div className="cart__container">
                    <ul className="cart__list">
                        {
                            addedPosts.map((post)=>{
                                price += +post.price
                                return <li key={post._id} className="cart-item">
                                    <div className="cart-item__container">
                                        <div className="cart-item__name">{post.name}</div>
                                        <div className="cart-item__price">{post.price}$</div>
                                    </div>
                                    <button className="delete_cart-item" onClick={()=>{
                                        setAddedPosts(addedPosts.filter((p)=>{
                                            return  p._id !== post._id
                                        }))
                                    }}></button>
                                </li>
                            })
                        }
                    </ul>
                    <div className="cart__totalPrice">
                        Total: {price}$
                    </div>
                </div>
                : <div className="emptyCart__msg">Your cart is empty!</div>
            }
        </div>

    );
};

export default Cart;