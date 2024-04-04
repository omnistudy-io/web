// Package imports
import { Routes, Route } from "react-router-dom";
import {useEffect} from "react";

// Component imports
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import _404 from "../404";
import axios from "axios";

export default function Router() {

    return(
        <div className="h-full">
            <Routes>
                {/* Show the homepage of the website */}
                <Route path="/" element={<Home/>}></Route>

                {/* Show the about page of the website */}
                <Route path="/about" element={<About/>}></Route>

                {/* Show the login page to the user */}
                <Route path="/login" element={<Login/>}></Route>

                {/* Show the register page to the user */}
                <Route path="/register" element={<Register/>}></Route>

                {/* Show the forgot password page to the user */}
                <Route path="/forgot-password" element={<ForgotPassword/>}></Route>

                {/* Display a 404 error for all routes not listed above */}
                <Route path="/*" element={<_404/>}></Route>
            </Routes>
        </div>
    );
}