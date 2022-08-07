import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import Newsletter from "./components/Newsletter/Newsletter";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import MessagesContainer from "./components/Messenger/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import useAppLoading from "./Hooks/useAppLoading";


let App = function () {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="page-content">
                <Sidebar/>
                <Routes>
                    <Route path="/profile/:id" element={<ProfileContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/newsletter" element={<Newsletter/>}/>
                    <Route path="/messages" element={<MessagesContainer/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    )
};

const InitializedApp = (props) => {
    return useAppLoading(App, props.appState)
}

export default InitializedApp