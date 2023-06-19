import React from 'react';
import classes from "./MyFilterPC.module.css";
import {useDispatch, useSelector} from "react-redux";

const MyFilterPc = () => {

    const dispatch = useDispatch()
    const currentType = useSelector(state => state.type.type)
    const currentSort = useSelector(state => state.filter.sort)

    return (
        <div className={classes.wrapper}>
            <div className={[classes.container, classes.categoriesContainer].join(' ')}>
                <div
                    className={currentType === 'all' ? [classes.title, classes.active, classes.categories].join(' ') : [classes.title, classes.categories].join(' ')}
                    onClick={() => {
                        dispatch({type: "SET_TYPE", payload: 'all'})
                    }}
                >
                    All Categories
                </div>
                <ul>
                    <li className={classes.listItemContainer}>
                        <button onClick={() => {
                            dispatch({type: "SET_TYPE", payload: 'individual'})
                        }}
                                className={currentType === 'individual' ? [classes.listItem, classes.active].join(' ') : classes.listItem}
                        >Individual
                        </button>
                    </li>
                    <li className={classes.listItemContainer}>
                        <button onClick={() => {
                            dispatch({type: "SET_TYPE", payload: 'pocket'})
                        }}
                                className={currentType === 'pocket' ? [classes.listItem, classes.active].join(' ') : classes.listItem}
                        >Pocket
                        </button>
                    </li>
                    <li className={classes.listItemContainer}>
                        <button onClick={() => {
                            dispatch({type: "SET_TYPE", payload: 'portable'})
                        }}
                                className={currentType === 'portable' ? [classes.listItem, classes.active].join(' ') : classes.listItem}
                        >Portable
                        </button>
                    </li>
                    <li className={classes.listItemContainer}>
                        <button onClick={() => {
                            dispatch({type: "SET_TYPE", payload: 'wideRange'})
                        }}
                                className={currentType === 'wideRange' ? [classes.listItem, classes.active].join(' ') : classes.listItem}
                        >Wide-range
                        </button>
                    </li>
                    <li className={classes.listItemContainer}>
                        <button onClick={() => {
                            dispatch({type: "SET_TYPE", payload: 'standard'})
                        }}
                                className={currentType === 'standard' ? [classes.listItem, classes.active].join(' ') : classes.listItem}
                        >Standard
                        </button>
                    </li>
                    <li className={classes.listItemContainer}>
                        <button onClick={() => {
                            dispatch({type: "SET_TYPE", payload: 'neutron'})
                        }}
                                className={currentType === 'neutron' ? [classes.listItem, classes.active].join(' ') : classes.listItem}
                        >Neutron
                        </button>
                    </li>
                </ul>
            </div>
            <div className={classes.container}>
                <div className={[classes.title, classes.sort].join(' ')}>Sort by:</div>
                <ul className={classes.sortList}>
                    <li onClick={()=> dispatch({type:"SET_SORT", payload: 'price'})} className={classes.sortList__item}>
                        <div className={classes.dot}>
                            {
                                currentSort === 'price' && <div className={classes.innerDot}/>
                            }
                        </div>
                        Price
                    </li>
                    <li onClick={()=> dispatch({type:"SET_SORT", payload: 'name'})} className={classes.sortList__item}>
                        <div className={classes.dot}>
                            {
                                currentSort === 'name' && <div className={classes.innerDot}/>
                            }
                        </div>
                        Name
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyFilterPc;