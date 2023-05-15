import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./Pages/About";
import AdminPanel from "./Pages/AdminPanel";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/admin-panel" element={<AdminPanel/>}/>
            </Routes>
        </BrowserRouter>
        )
}

export default App;
