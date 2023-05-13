import React from 'react';
import classes from "./MyCard.module.css";
import MyButton from "../MyButton/MyButton";

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
                <MyButton style={{
                    width: 80,
                    height: 30,
                    fontSize: 13,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }} onClick={remove}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default MyCard;