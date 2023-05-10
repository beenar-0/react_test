import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = (props) => {
    return (
        <input {...props} type="text" className={classes.myInput}/>
    );
};

export default MyInput;