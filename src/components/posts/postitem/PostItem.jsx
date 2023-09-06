import React from "react";
import styles from "./postItem.module.css";

const PostItem = ({ item }) => {
    // console.log(item);

    //author
    // {username: 'ads', avatarImg: 'e'}
    // comments
    // []
    // commentsCount
    // 0
    // description
    // "csa"
    // id
    // 2
    // likes
    // 0
    // postQuestion
    // "csa"

    return (
        <>
            <div className={styles.postItem_center}>
                <div className={styles.center__user__block}>
                    <div className={styles.user__block}>
                        <div className={styles.user__left__block}>
                            <img
                                className={styles.user__img}
                                src={item.author.avatarImg}
                                alt=""
                            />
                            <h5 className={styles.username}>
                                {item.author.username}
                            </h5>
                        </div>
                    </div>

                    <div className={styles.user__right__block}>
                        <a href="">...</a>
                    </div>
                </div>

                <div className={styles.center__main__block}>
                    <div className={styles.main__block}>
                        <h2>{item.postQuestion}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className={styles.bottom__part}>
                        <div className={styles.btns}>
                            <button className={styles.to__desc__btn}>
                                Learn answers
                            </button>
                        </div>
                        <div className={styles.couter__block}>
                            <p>{item.likes}</p>
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
