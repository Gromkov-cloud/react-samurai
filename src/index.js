import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App appState={store.getState()}/>
    </Provider>
);


reportWebVitals();