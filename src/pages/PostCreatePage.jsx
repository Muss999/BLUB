import React from "react";
import PostCreate from "../components/posts/postCreate/PostCreate";
import SideBar from "../components/sideBar/SideBar";

const PostCreatePage = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <div className="">
                <PostCreate />
            </div>
        </div>
    );
};

export default PostCreatePage;
