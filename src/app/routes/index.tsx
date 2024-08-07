import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/home";
import Error404 from "../screens/client/404";
import { Login } from "../screens/client/login";
import { Register } from "../screens/client/register";
import BasicsOfMotion from "../screens/test";



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path={"/"} element={<Home/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
                <Route path={"/test"} element={<BasicsOfMotion/>} />
            </Routes>
        </BrowserRouter>
    );
}