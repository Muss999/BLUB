import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import QuestionsPage from "../pages/QuestionsPage";
import PostCreatePage from "../pages/PostCreatePage";

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
        {
            id: 3,
            path: "/",
            element: <QuestionsPage />,
        },
        {
            id: 4,
            path: "/post-create",
            element: <PostCreatePage />,
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
