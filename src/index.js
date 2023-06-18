import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/app.css'
import '../src/styles/normalize.css'
import {Provider} from "react-redux";
import {store} from "./store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);


