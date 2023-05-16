import React, {useState} from 'react';
import classes from "./MyCard.module.css"
import PostService from "../../../API/PostService";

const MyCard = ({post, remove, loading, fetchPosts, setEditingPost, setEditActive, isAdmin, setAddedPosts, addedPosts}) => {

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
                fetchPosts()
            })
    }


    const [isAdded, setIsAdded] = useState(false)
    const notAddedClasses = [classes.button, classes.cart__btn]
    const addedClasses = [classes.button, classes.cart__btn, classes.cart__added]


    return (
        <div className={classes.container}>
            <div className={classes.photo} style={{backgroundImage: `url("${post.img}")`}}></div>
            <div className={classes.content__container}>
                <div className={classes.title}>{post.name}</div>
                <p className={classes.description}>{post.description}</p>
                <p className={classes.price}>{post.price}$</p>
                {
                    isAdmin
                        ?
                        <div className={classes.button__container}>
                            <button className={classes.button} onClick={deleteCat}>
                                <div className={classes.delete__icon}></div>
                            </button>
                            <button
                                className={classes.button}
                                onClick={() => {
                                    setEditActive(true)
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
        </div>
    );
};

export default MyCard;