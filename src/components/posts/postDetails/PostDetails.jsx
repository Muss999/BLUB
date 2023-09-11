import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../../store/posts/postActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./postDetails.module.css";
import { useNavigate } from "react-router-dom";
import ComentCreate from "./comentCreate/ComentCreate";
import CommentList from "./cometList/CommentList";
import coment_Item from "../postitem/img/Vector (2).svg";
import like_item from "../postitem/img/Vector (1).svg";
import { editPost } from "../../../store/posts/postActions";

const PostDetails = () => {
    let { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { posts } = useSelector((state) => state.posts);
    let postObj = posts.find((item) => item.id == id);

    const [LikeObj, setLikeObj] = useState({
        user,
        id: Date.now(),
    });
    console.log(posts);

    if (!postObj) {
        return <div>error</div>; // Проверка наличия поста, так как он может быть не найден
    }
    const likeFunc = () => {
        const updatedlikeObj = [...postObj.likes, LikeObj]; // Создаем новый массив комментариев
        const updatedPost = {
            ...postObj,
            likes: updatedlikeObj,
            likesCount: updatedlikeObj.length, // Обновляем commentsCount
        };
        dispatch(editPost(updatedPost));
    };

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
                            <img
                                src={like_item}
                                alt=""
                                onClick={() => likeFunc()}
                            />

                            <p>{postObj.likesCount}</p>
                            <img
                                src={coment_Item}
                                alt=""
                                width="15px"
                                height="15px"
                            />
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
