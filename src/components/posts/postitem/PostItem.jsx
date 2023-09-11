import React from "react";
import styles from "./postItem.module.css";
import { useNavigate } from "react-router-dom";
import coment_Item from "./img/Vector (2).svg";
import like_item from "./img/Vector (1).svg";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../store/posts/postActions";

const PostItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.postItem_center}>
                <div className={styles.center__user__block}>
                    <div className={styles.user__block}>
                        <div className={styles.user__left__block}>
                            <img
                                className={styles.user__img}
                                src={item.author.avatarImg}
                                alt="internet problems"
                            />
                            <h3 className={styles.username}>
                                {item.author.username}
                            </h3>
                        </div>
                    </div>

                    <div className={styles.user__right__block}>
                        <div className={styles.dropdown}>
                            <div className={styles.toDeg}>
                                <div className={styles.dropdown_foto_div}>
                                    <p>...</p>
                                </div>
                            </div>
                            <div className={styles.dropdown_content}>
                                <a
                                    href="#"
                                    onClick={() => dispatch(deletePost(item))}>
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.center__main__block}>
                    <div className={styles.main__block}>
                        <h2>{item.postQuestion}</h2>
                        <p>{item.category}</p>
                    </div>
                    <div className={styles.bottom__part}>
                        <div className={styles.btns}>
                            <button
                                className={styles.to__desc__btn}
                                onClick={() =>
                                    navigate(`/post-details/${item.id}`)
                                }>
                                Learn answers
                            </button>
                        </div>
                        <div className={styles.couter__block}>
                            <img src={like_item} alt="" />
                            <p>{item.likesCount}</p>
                            <img
                                src={coment_Item}
                                alt=""
                                width="15px"
                                height="15px"
                            />
                            <p>{item.commentsCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostItem;

// let a = post.find(item => item.id === userid)

// let d  = a.commentsCount = a.comments.reducer(a,b => {a+b},0)
