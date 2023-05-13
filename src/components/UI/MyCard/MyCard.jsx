import React from 'react';
import MyButton from "../MyButton/MyButton";
import classes from "./MyCard.module.css"

const MyCard = ({post, remove}) => {

    function limitStr(str, n, symb = '...') {
        if (!n && !symb) return str;
        return str.slice(0, n) + symb;
    }

    return (
        <div className={classes.container}>
            <div className={classes.photo}></div>
            <div className={classes.content__container}>
                <div className={classes.title}>{limitStr(post.title, 15)}</div>
                <p className={classes.description}>{post.body}</p>
                <div className={classes.button__container}>
                    <button className={classes.button} onClick={()=>{
                        remove(post)
                    }}>
                        <div className={classes.delete__icon}></div>
                    </button>
                    <button className={classes.button} onClick={()=>{}}>
                        <div className={classes.edit__icon}></div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyCard;