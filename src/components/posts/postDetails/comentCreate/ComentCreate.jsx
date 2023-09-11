import React, { useEffect, useState } from "react";
import styles from "./comentCreate.module.css";
import { useParams } from "react-router-dom";
import { getPosts, editPost } from "../../../../store/posts/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ComentCreate = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));

    const [comentsObj, setComentsObj] = useState({
        user,
        id: Date.now(),
        comment: "",
    });

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { posts } = useSelector((state) => state.posts);
    const postObj = posts.find((item) => item.id == id);

    if (!postObj) {
        return <div>error</div>; // Проверка наличия поста, так как он может быть не найден
    }

    // const [newpostObj, setNewpostObj] = useState(postObj);

    const addCom = () => {
        const updatedComments = [...postObj.comments, comentsObj]; // Создаем новый массив комментариев
        const updatedPost = {
            ...postObj,
            comments: updatedComments,
            commentsCount: updatedComments.length, // Обновляем commentsCount
        };
        dispatch(editPost(updatedPost));
    };

    return (
        <div className={styles.commentDiv}>
            <input
                className={styles.commentInp}
                type="text"
                maxLength="80"
                onChange={(e) =>
                    setComentsObj({
                        ...comentsObj,
                        comment: e.target.value,
                    })
                }
            />
            <button
                className={styles.commentBtn}
                onClick={() => {
                    addCom();
                    navigate("/");
                }}
            >
                add comment
            </button>
        </div>
    );
};

export default ComentCreate;
