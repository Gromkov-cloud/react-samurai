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
            <App appState={state} MessagesActions={store.MessagesActions}/>
        </React.StrictMode>
    );
}

renderAllPage(store._state)

store.subscribe(renderAllPage)

reportWebVitals();
