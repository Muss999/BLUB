import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const MainRoutes = () => {
    const ROUTES = [
        {
            id: 1,
            path: "/register",
            element: <RegisterPage />,
        },
        {
            id: 2,
            path: "/login",
            element: <LoginPage />,
        },
    ];

    return (
        <Routes>
            {ROUTES.map((route) => (
                <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default MainRoutes;
