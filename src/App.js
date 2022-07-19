import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Newsletter from "./components/Newsletter/Newsletter";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import MessagesContainer from "./components/Messanges/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = function () {

    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header/>
                <div className="page-content">
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Profile/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/newsletter" element={<Newsletter/>}/>
                        <Route path="/messages" element={<MessagesContainer/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App