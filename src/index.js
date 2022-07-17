import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderAllPage = (store) => {
    root.render(
        <React.StrictMode>
            <App appStore={store}/>
        </React.StrictMode>
    );
}

renderAllPage(store)
store.subscribe(() => {
    renderAllPage(store)
})

reportWebVitals();