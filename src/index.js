import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import InitializedApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <InitializedApp appState={store.getState()}/>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();