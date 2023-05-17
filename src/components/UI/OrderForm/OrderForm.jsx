import React, {useEffect, useState} from 'react';
import classes from "./OrderForm.module.css";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import useFetching from "../../../hooks/useFetching";
import PostService from "../../../API/PostService";


const OrderForm = ({order, setOrder, fetching, setAddedPosts}) => {


    // useEffect(()=>{
    //
    // }, [])

    return (
        <div className={classes.form__container}>
            <h2 className={classes.form__title}>Your information</h2>
            <form className={classes.form}>
                <MyInput value={order.name} placeholder="Name" onChange={(e)=>{
                    setOrder({...order, name:e.target.value})
                }}/>
                <MyInput value={order.address}  placeholder="Address" onChange={(e)=>{
                    setOrder({...order, address:e.target.value})
                }}/>
                <MyInput value={order.email}  placeholder="Email" onChange={(e)=>{
                    setOrder({...order, email:e.target.value})
                }}/>
                <MyInput value={order.phoneNumber}  placeholder="Phone number" onChange={(e)=>{
                    setOrder({...order, phoneNumber:e.target.value})
                }}/>
                <MyButton
                onClick={(e)=>{
                   e.preventDefault()
                    setOrder({name: '', address: '', email: '', phoneNumber: ''})
                    fetching()
                        .then(()=>{
                            setTimeout(()=>{
                                setAddedPosts([])
                            },1000)

                        })
                }}
                >Order</MyButton>
            </form>
        </div>
    );
};

export default OrderForm;