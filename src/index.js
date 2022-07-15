import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state"

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderAllPage = (state) => {
    root.render(
        <React.StrictMode>
            <App appState={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

store.subscribe(renderAllPage)
renderAllPage(store.getState())

reportWebVitals();