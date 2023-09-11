import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../../../../store/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./postAccout.module.css";

const PostAccount = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.user);
    const [userObj, setUserObj] = useState(null); // Используйте состояние для хранения userObj
    console.log(loading);

    useEffect(() => {
        if (loading) {
            return alert("cgsj");
        }

        if (users.length > 0 && userObj === null) {
            const foundUser = users.find((item) => item.id == id);
            setUserObj(foundUser);
        }
        console.log(users);

        console.log(userObj);
    }, [users, userObj, id]);

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
