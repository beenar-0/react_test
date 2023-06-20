import React, {useEffect, useState} from 'react';
import classes from "./MyCard.module.css"
import PostService from "../../../API/PostService";
import {useDispatch} from "react-redux";

const MyCard = ({post, remove, loading, fetchPosts, setEditingPost, isAdmin, setAddedPosts, addedPosts, currentType}) => {

    function deleteCat() {
        PostService.deletePost(post._id)
            .then(() => {
                remove(post)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                loading = false
                fetchPosts(currentType)
            })
    }
    const dispatch = useDispatch()
    const [isAdded, setIsAdded] = useState(false)
    const notAddedClasses = [classes.button, classes.cart__btn]
    const addedClasses = [classes.button, classes.cart__btn, classes.cart__added]

    useEffect(()=>{
       if ([...addedPosts].find((p)=>p._id === post._id)) setIsAdded(true)
    })


    return (
        <div className={classes.container}>
            <div className={classes.photo} style={{backgroundImage: `url("${post.img}")`}}></div>
            <div className={classes.content__container}>
                <div className={classes.title}>{post.name}</div>
                <div className={classes.description}>{post.description}</div>
                <div className={classes.paramContainer}>
                    <div className={classes.parameter}>Measurement range:</div>
                    <div className={classes.dots}></div>
                    <div className={classes.value}>{post.measurementRange}</div>
                </div>
                <div className={classes.paramContainer}>
                    <div className={classes.parameter}>Energy range:</div>
                    <div className={classes.dots}></div>
                    <div className={classes.value}>{post.energyRange}</div>
                </div><div className={classes.paramContainer}>
                <div className={classes.parameter}>Protection class:</div>
                <div className={classes.dots}></div>
                <div className={classes.value}>{post.protectionClass}</div>
            </div><div className={classes.paramContainer}>
                <div className={classes.parameter}>Type:</div>
                <div className={classes.dots}></div>
                <div className={classes.value}>{post.type}</div>
            </div>
                <p className={classes.price}>{post.price}$</p>
            </div>
                {
                    isAdmin
                        ?
                        <div className={[classes.button__container, classes.center].join(' ')}>
                            <button className={classes.button} onClick={deleteCat}>
                                <div className={classes.delete__icon}></div>
                            </button>
                            <button
                                className={classes.button}
                                onClick={() => {
                                    dispatch({type:"SET_EDIT", payload: true})
                                    setEditingPost(post)
                                }}
                            >
                                <div className={classes.edit__icon}></div>
                            </button>
                        </div>
                        :
                        <div className={classes.button__container}>
                            <button
                                className={isAdded ? addedClasses.join(' ') : notAddedClasses.join(' ')}
                                onClick={()=>{
                                    setIsAdded(!isAdded)
                                    isAdded
                                        ? setAddedPosts(addedPosts.filter((p)=>{
                                            return post._id !== p._id
                                        }))
                                        : setAddedPosts([...addedPosts, post])
                                }}>
                                <div className={classes.cart__icon}></div>
                            </button>
                        </div>
                }
        </div>
    );
};

export default MyCard;