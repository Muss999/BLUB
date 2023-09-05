import React from "react";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routing/MainRoutes";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <MainRoutes />
        </>
    );
};

export default App;
