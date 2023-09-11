import React from "react";
import styles from "./comentItem.module.css";

const CommentItem = ({ item }) => {
    return (
        <div className={styles.center__user__block}>
            <div className={styles.user__block}>
                <div className={styles.user__left__block}>
                    <img
                        className={styles.user__img}
                        src={item.user.avatarImg}
                        alt=""
                    />
                    <h3 className={styles.username}>{item.user.username}</h3>
                </div>
            </div>
            <h4 className={styles.username}>{item.comment}</h4>
        </div>
    );
};

export default CommentItem;
