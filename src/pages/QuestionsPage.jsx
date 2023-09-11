import React from "react";
import SideBar from "../components/sideBar/SideBar";
import PostList from "../components/posts/postList/PostList";
import Footer from "../components/footer/Footer";

const QuestionsPage = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <SideBar />
                <div>
                    <PostList />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default QuestionsPage;
