import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </>
    );
};

export default Routers;
