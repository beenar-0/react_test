import React, {useState} from 'react';
import classes from "./MyHeader.module.css";
import {Link} from "react-router-dom";

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
            <div className={classes.atomtexLogo}></div>
            <div className={classes.basket}>
                <Link className="list__item inCart" to='/cart'></Link>
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