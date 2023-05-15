import React from 'react';
import classes from "./MyHeader.module.css";

const MyHeader = ({setBurger, isBurgerChecked}) => {
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
            <div className={classes.basket}></div>
        </header>
    );
};

export default MyHeader;