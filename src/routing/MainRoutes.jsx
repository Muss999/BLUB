import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import QuestionsPage from "../pages/QuestionsPage";
import PostCreatePage from "../pages/PostCreatePage";
import PostDetailsPage from "../pages/PostDetailsPage";
import GetPremiumPage from "../pages/GetPremiumPage";
import CategoriesPage from "../pages/CategoriesPage";

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
        {
            id: 5,
            path: "/post-details/:id",
            element: <PostDetailsPage />,
        },
        {
            id: 6,
            path: "/get-premium",
            element: <GetPremiumPage />,
        },
        {
            id: 7,
            path: "/categories-page",
            element: <CategoriesPage />,
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
