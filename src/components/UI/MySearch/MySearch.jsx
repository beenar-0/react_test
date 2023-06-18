import React from 'react';
import classes from "./MySearch.module.css";
import {useDispatch, useSelector} from "react-redux";

const MySearch = (props) => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    return (
        <div className={classes.searchContainer}>
            <div className={classes.lupa}></div>
            <input className={classes.search} onChange={(e)=>{
                dispatch({type:"SET_QUERY", payload: e.target.value})
            }} {...props} type="text"></input>
        </div>
    );
};

export default MySearch;