import React, {useState} from 'react';
import classes from "./MyHeader.module.css";
import {Link} from "react-router-dom";
import MySearch from "../MySearch/MySearch";
import {useDispatch, useSelector} from "react-redux";

const MyHeader = ({setBurger, isBurgerChecked, addedPosts}) => {

    return (
        <header className={classes.header}>
            <div className={classes.innerContainer}>
                {
                    window.matchMedia("(max-width: 1150px)").matches
                        ?   <div className={classes.container}>
                            <label htmlFor="check">
                                <input checked={isBurgerChecked} type="checkbox" id="check" onChange={setBurger}/>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        :   <ul className={classes.list}>
                            <li className={classes.list__item}><Link to={'/main-page'}>Main Page</Link></li>
                            <li className={classes.list__item}><Link to={'/cart'}>Cart</Link></li>
                            <li className={classes.list__item}><Link to={'/admin-panel'}>Admin panel</Link></li>
                            <li className={classes.list__item}><Link to={'/about'}>About</Link></li>
                        </ul>
                }
                <div className={classes.atomtexLogo}><Link to={'/main-page'}></Link></div>
                {
                    window.matchMedia("(min-width: 1150px)").matches
                    && <MySearch
                        type="text"
                        placeholder="Search"
                    />
                }
            </div>
            <div className={classes.cart}>
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