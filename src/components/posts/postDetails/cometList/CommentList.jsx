import React from "react";
import CommentItem from "../commentItem/CommentItem";
import styles from "./comentList.module.css";

const CommentList = ({ postObj }) => {
    return (
        <div className={styles.commList}>
            {postObj.comments.map((item) => (
                <CommentItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CommentList;
