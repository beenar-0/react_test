import React from 'react';
import MyButton from "../MyButton/MyButton";
import classes from "./MyCard.module.css"

const MyCard = ({post, remove}) => {

    function limitStr(str, n, symb = '...') {
        if (!n && !symb) return str;
        return str.slice(0, n);
    }

    return (
        <div className={classes.container}>
            <div className={classes.photo} style={{backgroundImage:`url("${post.img}")`}}></div>
            <div className={classes.content__container}>
                <div className={classes.title}>{limitStr(post.name, 15)}</div>
                <p className={classes.description}>{post.description}</p>
                <p className={classes.price}>{post.price}$</p>
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