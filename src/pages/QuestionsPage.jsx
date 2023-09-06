import React from "react";
import SideBar from "../components/sideBar/SideBar";
import PostList from "../components/posts/PostList";
const QuestionsPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <div>
                <PostList />
            </div>
        </div>
    );
};

export default QuestionsPage;
