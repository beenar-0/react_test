import React from 'react';
import classes from "./MyHeader.module.css";

const MyHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <label htmlFor="check">
                    <input type="checkbox" id="check"/>
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