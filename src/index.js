import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import {Provider} from "react-redux"

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));



const renderAllPage = (state) => {
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <App appState={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </Provider>
    );
}

store.subscribe(() => {
    renderAllPage(store.getState())
})
renderAllPage(store.getState())


reportWebVitals();