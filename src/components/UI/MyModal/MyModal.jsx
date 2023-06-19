import React from 'react';
import classes from "./MyModal.module.css";
import {useDispatch, useSelector} from "react-redux";

const MyModal = ({active, children}) => {
    const dispatch = useDispatch()
    const classList = [classes.modal__container]
    if (active) classList.push(classes._active)

    return (
        <div
            className={classList.join(' ')}
            onClick={()=>{
                dispatch({type:"SET_EDIT", payload: false})
                dispatch({type:"SET_MODAL", payload: false})
            }}
        >
            <div className={classes.modal}
            onClick={(event)=>{
                event.stopPropagation()
            }}>
                {children}
            </div>
        </div>
    );
};
export default MyModal;