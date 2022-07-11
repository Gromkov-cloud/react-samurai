import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Messages from "./components/Messanges/Messanges";
import Newsletter from "./components/Newsletter/Newsletter";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";

const App = function () {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header/>
                <div className="page-content">
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Profile/>}></Route>
                        <Route path="/newsletter" element={<Newsletter/>}></Route>
                        <Route path="/messages" element={<Messages/>}></Route>
                        <Route path="/music" element={<Music/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App