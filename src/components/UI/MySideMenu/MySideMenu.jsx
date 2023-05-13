import classes from "./MySideMenu.module.css";

const MySideMenu = ({menuActive}) => {
    // app.current.className='App lock'
    return (
        <div className={menuActive
            ? 'sideMenuContainer _active'
            : 'sideMenuContainer'
        }>
            <ul className={classes.list}>
                <li className={classes.list__item}>Main Page</li>
                <li className={classes.list__item}>Cart</li>
                <li className={classes.list__item}>Admin panel</li>
                <li className={classes.list__item}>About</li>
            </ul>
        </div>
    );
};

export default MySideMenu;