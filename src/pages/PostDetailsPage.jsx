import React from "react";
import PostDetails from "../components/posts/postDetails/PostDetails";
import SideBar from "../components/sideBar/SideBar";
import PostAccount from "../components/posts/postDetails/postAccount/PostAccount";
import ComentCreate from "../components/posts/postDetails/comentCreate/ComentCreate";

const PostDetailsPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <div>
                <PostDetails />
                <ComentCreate />
            </div>
            {/* <PostAccount />  */}
        </div>
    );
};

export default PostDetailsPage;
