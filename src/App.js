import React, {useState} from "react";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom"
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import MyHeader from "./components/UI/MyHeader/MyHeader";
import Admin from "./Pages/Admin";
import Cart from "./Pages/Cart";


function App() {

    const [modalActive, setModalActive] = useState(false)
    const [isEditActive, setEditActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [isBurgerChecked, setBurgerChecked] = useState(false)
    const [addedPosts, setAddedPosts] = useState([])

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
        <BrowserRouter basename="/react_test/">
            <div className={isMenuActive || modalActive || isEditActive
                ? 'App _lock'
                : 'App'
            }>
                <div
                    onClick={closeMenu}
                    className={isMenuActive
                    ? 'lockScreen _active'
                    : 'lockScreen'
                }>
                </div>
                <div className={isMenuActive
                    ? 'sideMenuContainer _active'
                    : 'sideMenuContainer'
                }>
                    <ul className={"list"}>
                        <li className="list__item">
                            <Link className="list__item" onClick={closeMenu} to='/main-page'>Main Page</Link></li>
                        <li className="list__item">
                            <Link className="list__item" onClick={closeMenu} to='/cart'>Cart</Link></li>
                        <li className="list__item">
                            <Link className="list__item" onClick={closeMenu} to='/admin-panel'>Admin panel</Link></li>
                        <li className="list__item">
                            <Link className="list__item" onClick={closeMenu} to='/about'>About</Link></li>
                    </ul>
                </div>
                <MyHeader
                    addedPosts={addedPosts}
                    setBurger={setBurger}
                    isBurgerChecked={isBurgerChecked}
                />

                <Routes>
                    <Route path="/main-page" element={
                        <Posts
                            isAdmin={false}
                            setAddedPosts={setAddedPosts}
                            addedPosts={addedPosts}
                            modalActive={modalActive}
                            setModalActive={setModalActive}
                            isEditActive={isEditActive}
                            setEditActive={setEditActive}
                            isMenuActive={isMenuActive}
                            setIsMenuActive={setIsMenuActive}
                        />
                    }/>
                    <Route path="/cart" element={
                        <Cart
                            setAddedPosts={setAddedPosts}
                            addedPosts={addedPosts}
                        />}/>
                    <Route path="/admin-panel" element={
                        <Admin
                            isAdmin={true}
                            setAddedPosts={setAddedPosts}
                            addedPosts={addedPosts}
                            modalActive={modalActive}
                            setModalActive={setModalActive}
                            isEditActive={isEditActive}
                            setEditActive={setEditActive}
                            isMenuActive={isMenuActive}
                            setIsMenuActive={setIsMenuActive}
                        />
                    }/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Navigate to="/main-page" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
