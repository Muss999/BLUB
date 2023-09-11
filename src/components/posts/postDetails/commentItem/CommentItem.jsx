import React from "react";
import styles from "./comentItem.module.css";

const CommentItem = ({ item }) => {
    return (
        <div>
            <div className={styles.center__user__block}>
                <div className={styles.user__block}>
                    <div className={styles.user__left__block}>
                        <img
                            className={styles.user__img}
                            src={item.user.avatarImg}
                            alt=""
                        />
                        <h5 className={styles.username}>
                            {item.user.username}
                        </h5>
                    </div>
                </div>
                <h5 className={styles.username}>{item.comment}</h5>
            </div>
        </div>
    );
};

export default CommentItem;
