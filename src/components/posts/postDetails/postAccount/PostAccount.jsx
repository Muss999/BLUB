import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../../../store/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./postAccout.module.css";

const PostAccount = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [userObj, setUserObj] = useState(null); // Используйте состояние для хранения userObj

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(getUser());
            setTimeout(() => {
                const foundUser = user.find((item) => item.id == id);
                setUserObj(foundUser); // Устанавливаем userObj после завершения запроса
            }, 2000);
        };

        fetchUser();
    }, []);
    console.log(userObj);

    return (
        <div>
            <div className={styles.user__block}>
                {/* <img src={userObj.avatarImg} alt="" /> */}
                {/* <h2>@{userObj.username}</h2> */}
                <hr />
                {/* <p className={styles.sub__text}>{userObj.subscribers}</p> */}
            </div>
        </div>
    );
};

export default PostAccount;
