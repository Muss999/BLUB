import React, { useEffect, useState } from "react";
import PostItem from "../postitem/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../store/posts/postActions";
import styles from "./postList.module.css";

const PostList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const posts = useSelector((state) => state.posts);

    let a = posts.posts;

    return (
        <div className={styles.center__block}>
            {a.map((item) => (
                <PostItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default PostList;
