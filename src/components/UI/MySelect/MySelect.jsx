import React from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            className={classes.select}
            value={value}
            onChange={(event)=>{
                return onChange(event.target.value)
            }}
        >
            <option className={classes.option} disabled value=''>{defaultOption}</option>
            {options.map((option)=>{
                return <option className={classes.option} key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>
    );
};

export default MySelect;