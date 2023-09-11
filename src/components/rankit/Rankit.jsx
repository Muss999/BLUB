import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "../posts/postitem/PostItem";

const Rankit = () => {
    const { posts } = useSelector((state) => state.posts);

    const sortedPosts = [...posts].sort((a, b) => b.likesCount - a.likesCount);

    console.log(sortedPosts);

    return (
        <>
            {" "}
            {sortedPosts.map((item) => (
                <PostItem key={item.id} item={item} />
            ))}
        </>
    );
};

export default Rankit;
