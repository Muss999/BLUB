import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../store/posts/postActions";
import styles from "./postCreate.module.css";
import postImg from "./img/Vector.svg";

const PostCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user"));

    const [postObj, setpostObj] = useState({
        author: {
            ...user,
        },
        postQuestion: "",
        category: "",
        comments: [],
        likes: [],
        description: "",
        likesCount: 0,
        commentsCount: 0,
    });
    return (
        <>
            <div className={styles.add__post__block}>
                <div className={styles.main__add_block}>
                    <div className={styles.input__block}>
                        <input
                            className={styles.main_input}
                            type="text"
                            placeholder="post Category"
                            onChange={(e) =>
                                setpostObj({
                                    ...postObj,
                                    category: e.target.value,
                                })
                            }
                            maxLength="30"
                        />
                        <input
                            type="text"
                            className={styles.main_input}
                            placeholder="post question"
                            onChange={(e) =>
                                setpostObj({
                                    ...postObj,
                                    postQuestion: e.target.value,
                                })
                            }
                            maxlength="60"
                        />
                        <input
                            className={styles.desc_input}
                            placeholder="post description"
                            type="text"
                            onChange={(e) =>
                                setpostObj({
                                    ...postObj,
                                    description: e.target.value,
                                })
                            }
                            maxlength="200"
                        />
                    </div>
                    <button
                        className={styles.post__btn}
                        onClick={() => {
                            navigate("/");
                            dispatch(createPost(postObj));
                        }}>
                        <img src={postImg} alt="" />
                        Add Post
                    </button>
                </div>
            </div>
        </>
    );
};

export default PostCreate;
