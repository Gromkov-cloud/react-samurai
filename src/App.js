import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import Newsletter from "./components/Newsletter/Newsletter";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import MessagesContainer from "./components/Messenger/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import useAppLoading from "./Hooks/useAppLoading";
import Profile from "./components/Profile/Profile";
import ChangeUserInfo from "./components/ChangeUserInfo/ChangeUserInfo";


let App = function () {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="page-content">
                <Sidebar/>

                <div className="app-content">
                    <Routes>
                        <Route path="/profile/:id" element={<Profile/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/newsletter" element={<Newsletter/>}/>
                        <Route path="/messages" element={<MessagesContainer/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/change-user-info" element={<ChangeUserInfo/>}/>
                    </Routes>
                </div>

            </div>
        </div>
    )
};

const InitializedApp = (props) => {
    return useAppLoading(App, props.appState)
}

export default InitializedApp