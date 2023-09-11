import React from "react";
import Categories from "../components/posts/category/Categories";
import SideBar from "../components/sideBar/SideBar";
const CategoriesPage = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <SideBar />
                <div style={{ marginLeft: "400px" }}>
                    <Categories />
                </div>
            </div>
        </>
    );
};

export default CategoriesPage;
