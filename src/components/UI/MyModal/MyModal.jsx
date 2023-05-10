import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({modalActive, setModalActive, children}) => {

    const classList = [classes.modal__container]
    if (modalActive) classList.push(classes._active)

    return (
        <div
            className={classList.join(' ')}
            onClick={()=>{
                return setModalActive(false)
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