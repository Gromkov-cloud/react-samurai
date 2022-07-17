import "./App.css";
import Header from "./components/Header/Header";
// import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Newsletter from "./components/Newsletter/Newsletter";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import MessagesContainer from "./components/Messanges/MessagesContainer";

const App = function ({appStore}) {

    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header/>
                <div className="page-content">
                    <Sidebar/>
                    <Routes>
                        {/*<Route path="/"*/}
                        {/*       element={<Profile*/}
                        {/*           appState={props.appState}*/}
                        {/*           dispatch={props.dispatch}*/}
                        {/*       />}*/}
                        {/*/>*/}
                        <Route path="/newsletter"
                               element={<Newsletter/>}
                        />
                        <Route path="/messages"
                               element={
                                   <MessagesContainer appStore={appStore}
                                   />
                               }
                        />
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App