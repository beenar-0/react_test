import React, {useState} from 'react';
import classes from "./MyHeader.module.css";

const MyHeader = ({setBurger, isBurgerChecked, addedPosts}) => {




    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <label htmlFor="check">
                    <input checked={isBurgerChecked} type="checkbox" id="check" onChange={setBurger}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className={classes.basket}>
                {
                    addedPosts.length
                        ? <div className={classes.counter}>{addedPosts.length}</div>
                        : ''
                }

            </div>
        </header>
    );
};

export default MyHeader;