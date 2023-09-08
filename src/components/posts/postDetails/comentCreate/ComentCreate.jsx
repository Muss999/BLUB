import React, { useEffect, useState } from "react";
import style from "./comentCreate.module.css";
import { useParams } from "react-router-dom";
import { getPosts } from "../../../../store/posts/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComments } from "../../../../store/comments/commentsAction";

const ComentCreate = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { posts } = useSelector((state) => state.posts);
    let postObj = posts.find((item) => item.id == id);
    console.log(postObj);
    const [newpostObj, setNewpostObj] = useState(postObj);

    return (
        <div>
            <input
                type="text"
                maxLength="80"
                onChange={(e) =>
                    setNewpostObj({ newpostObj, comments: e.target.value })
                }
            />
            <button onClick={() => addComments(newpostObj)}>add coment</button>
        </div>
    );
};

export default ComentCreate;
