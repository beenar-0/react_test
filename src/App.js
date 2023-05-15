import React, {useState} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import About from "./Pages/About";
import AdminPanel from "./Pages/AdminPanel";
import MyHeader from "./components/UI/MyHeader/MyHeader";


function App() {

    const [modalActive, setModalActive] = useState(false)
    const [isEditActive, setEditActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [isBurgerChecked, setBurgerChecked] = useState(false)

    function closeMenu() {
        setBurgerChecked(false)
        setIsMenuActive(false)
    }

    function setBurger(e) {
        setBurgerChecked(!isBurgerChecked)
        e.target.checked
            ? setIsMenuActive(true)
            : setIsMenuActive(false)
    }

    return (
        <BrowserRouter>
            <div className={isMenuActive || modalActive || isEditActive
                ? 'App _lock'
                : 'App'
            }>
                <div className={isMenuActive
                    ? 'lockScreen _active'
                    : 'lockScreen'
                }>
                </div>
                <div className={isMenuActive
                    ? 'sideMenuContainer _active'
                    : 'sideMenuContainer'
                }>
                    <ul className={"list"}>
                        <li className="list__item"><Link className="list__item" onClick={closeMenu} to='/about'>Main Page</Link></li>
                        <li className="list__item"><Link className="list__item" onClick={closeMenu} to='/about'>Cart</Link></li>
                        <li className="list__item"><Link className="list__item" onClick={closeMenu} to='/admin-panel'>Admin panel</Link></li>
                        <li className="list__item"><Link className="list__item" onClick={closeMenu} to='/about'>About</Link></li>
                    </ul>
                </div>
                <MyHeader setBurger={setBurger} isBurgerChecked={isBurgerChecked}/>

                <Routes>
                    <Route path="/admin-panel" element={<AdminPanel
                        modalActive={modalActive}
                        setModalActive={setModalActive}
                        isEditActive={isEditActive}
                        setEditActive={setEditActive}
                        isMenuActive={isMenuActive}
                        setIsMenuActive={setIsMenuActive}
                    />}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
