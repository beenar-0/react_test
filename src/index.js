import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/app.css'
import '../src/styles/normalize.css'
import {Provider} from "react-redux";
import {store} from "./store";

// отключение zoom через скролл (в том числе трекападами в macOS)
document.addEventListener('mousewheel', function(e){
    if(!e.ctrlKey && !e.metaKey) return;

    e.preventDefault();
    e.stopImmediatePropagation();
}, {passive:false});

// отключение zoom прикосновениями (в том числе трекападами и т.п.) в Safari и iOS
document.addEventListener('gesturestart', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
}, {passive:false});

// отключение zoom через клавиатуру (ctrl + "+", ctrl + "-")
// кнопки браузера для управления zoom отключены не будут
document.addEventListener('keydown', function(e){
    if(!e.ctrlKey && !e.metaKey) return;
    if(e.keyCode !== 107 && e.keyCode !== 109) return;

    e.preventDefault();
    e.stopImmediatePropagation();
}, {passive:false});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);


