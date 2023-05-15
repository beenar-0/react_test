import classes from "./MySideMenu.module.css";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

const MySideMenu = ({menuActive}) => {

    return (
        <div className={menuActive
            ? 'sideMenuContainer _active'
            : 'sideMenuContainer'
        }>
            <ul className={"list"}>
                <li className={"list__item"}><Link to={'/about'}>Main Page</Link></li>
                <li className={"list__item"}><Link to={'/about'}>Cart</Link></li>
                <li className={"list__item"}><Link to={'/admin-panel'}>Admin panel</Link></li>
                <li className={"list__item"}><Link to={'/about'}>About</Link></li>
            </ul>
        </div>
    );
};

export default MySideMenu;