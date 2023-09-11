import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../../store/posts/postActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./postDetails.module.css";
import { useNavigate } from "react-router-dom";
import ComentCreate from "./comentCreate/ComentCreate";
import CommentList from "./cometList/CommentList";

const PostDetails = () => {
    let { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { posts } = useSelector((state) => state.posts);
    let postObj = posts.find((item) => item.id == id);

    return (
        <div className={styles.main_div_comments}>
            <div className={styles.postItem_center}>
                <div className={styles.center__user__block}>
                    <div className={styles.user__block}>
                        <div className={styles.user__left__block}>
                            <img
                                className={styles.user__img}
                                src={postObj.author.avatarImg}
                                alt=""
                            />
                            <h5 className={styles.username}>
                                {postObj.author.username}
                            </h5>
                        </div>
                    </div>

                    <div className={styles.user__right__block}>
                        <a href="">...</a>
                    </div>
                </div>

                <div className={styles.center__main__block}>
                    <div className={styles.main__block}>
                        <h2>{postObj.postQuestion}</h2>
                        <p>{postObj.category}</p>
                        <p>{postObj.description}</p>
                    </div>
                    <div className={styles.bottom__part}>
                        <div className={styles.btns}>
                            <button
                                className={styles.to__desc__btn}
                                onClick={() => navigate(`/`)}
                            >
                                back to posts
                            </button>
                        </div>
                        <div className={styles.couter__block}>
                            <p>{postObj.likes}</p>
                            <p>{postObj.commentsCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ComentCreate />
            <CommentList postObj={postObj} />
        </div>
    );
};

export default PostDetails;
