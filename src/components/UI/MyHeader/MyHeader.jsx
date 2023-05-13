import React from 'react';
import classes from "./MyHeader.module.css";
import {logDOM} from "@testing-library/react";

const MyHeader = ({setMenu, menuActive}) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <label htmlFor="check">
                    <input type="checkbox" id="check" onChange={(e)=>{
                        e.target.checked
                            ? setMenu(true)
                            : setMenu(false)
                    }}/>
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