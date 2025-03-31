import './App.css';
import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/Users/UserList";
import Main from "./components/layout/Main";
import UserEdit from "./pages/Users/UserEdit";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/register"} element={<Register/>}></Route>
                <Route path={"/admin"} element={<Main/>}>
                    <Route path="users" element={<UserList/>} />
                    <Route path="users/:uid/edit" element={<UserEdit/>} />
                    <Route path="dashboard" element={<Dashboard/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App;
