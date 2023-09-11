import React from "react";
import CommentItem from "../commentItem/CommentItem";

const CommentList = ({ postObj }) => {
    return (
        <div>
            {postObj.comments.map((item) => (
                <CommentItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CommentList;
