import React, {useState} from 'react';
import classes from "./OrderForm.module.css";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import useFetching from "../../../hooks/useFetching";
import PostService from "../../../API/PostService";


const OrderForm = ({order, setOrder, fetching, setAddedPosts}) => {


    let validationError = []
    const [error, setError] = useState([])

    function sendOrder(e) {
        e.preventDefault()
        validationError = []
        const checkName = new RegExp('^([A-Za-z])+$')
        const checkAddress = new RegExp('^([A-Za-z\\s0-9.,!?])+$')
        const checkEmail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        const checkPhoneNumber = new RegExp('^[0-9\\-\\+]{13}$')
        if (!checkName.test(order.name)) validationError.push('Incorrect name!')
        if (!checkAddress.test(order.address)) validationError.push('Incorrect address!')
        if (!checkEmail.test(order.email)) validationError.push('Incorrect email!')
        if (!checkPhoneNumber.test(order.phoneNumber)) validationError.push('Incorrect phone number!')
        if (validationError.length === 0) {
            setOrder({name: '', address: '', email: '', phoneNumber: ''})
            fetching()
                .then(() => {
                    setTimeout(() => {
                        setAddedPosts([])
                    }, 1000)

                })
        } else setError(validationError)
    }

    return (
        <div className={classes.form__container}>
            <h2 className={classes.form__title}>Your information</h2>
            <form className={classes.form}>
                <MyInput value={order.name} placeholder="Name" onChange={(e) => {
                    setOrder({...order, name: e.target.value})
                }}/>
                <MyInput value={order.address} placeholder="Address" onChange={(e) => {
                    setOrder({...order, address: e.target.value})
                }}/>
                <MyInput value={order.email} placeholder="Email" onChange={(e) => {
                    setOrder({...order, email: e.target.value})
                }}/>
                <MyInput value={order.phoneNumber} placeholder="Phone number" onChange={(e) => {
                    setOrder({...order, phoneNumber: e.target.value})
                }}/>
                {
                    error.length > 0 &&
                    <div>{
                        error.map((err) => {
                            return <div key={err} className="error">{err}</div>
                        })}
                    </div>
                }
                <MyButton onClick={sendOrder}>Order</MyButton>
            </form>
        </div>
    );
};

export default OrderForm;