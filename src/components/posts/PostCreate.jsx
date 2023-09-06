import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../store/posts/postActions";

const PostCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user"));

    const [postObj, setpostObj] = useState({
        author: {
            ...user,
        },
        postQuestion: "",
        comments: [],
        description: "",
        likes: 0,
        commentsCount: 0,
    });
    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={(e) =>
                        setpostObj({ ...postObj, postQuestion: e.target.value })
                    }
                />
                <input
                    type="text"
                    onChange={(e) =>
                        setpostObj({ ...postObj, description: e.target.value })
                    }
                />
            </div>
            <button
                onClick={() => {
                    dispatch(createPost(postObj));
                }}>
                Add Post
            </button>
        </>
    );
};

export default PostCreate;
