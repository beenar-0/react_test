import classes from "./MySideMenu.module.css";
import {Link} from "react-router-dom"

const MySideMenu = ({menuActive}) => {

    return (
        <div className={menuActive
            ? 'sideMenuContainer _active'
            : 'sideMenuContainer'
        }>
            <ul className={"list"}>
                <li className={"list__item"}><Link to={'/main-page'}>Main Page</Link></li>
                <li className={"list__item"}><Link to={'/cart'}>Cart</Link></li>
                <li className={"list__item"}><Link to={'/admin-panel'}>Admin panel</Link></li>
                <li className={"list__item"}><Link to={'/about'}>About</Link></li>
            </ul>
        </div>
    );
};

export default MySideMenu;