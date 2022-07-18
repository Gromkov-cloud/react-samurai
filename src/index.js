import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderAllPage = (store) => {
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <App appState={store.getState()}/>
            </React.StrictMode>
        </Provider>
    );
}

renderAllPage(store)
store.subscribe(() => {
    renderAllPage(store)
})

reportWebVitals();