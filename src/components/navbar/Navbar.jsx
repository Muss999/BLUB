import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { logout, getCategories } from "../../helpers/functions";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/posts/postSlice";
// foto
import logo from "./img/загружено-removebg-preview.png";
import userPluce from "./img/user-plus-1-removebg-preview.png";
import askQuestion from "./img/262038-removebg-preview.png";
import notificationTrue from "./img/notification-true.png";
import notificationFalse from "./img/notification-false.png";
import profileFoto from "./img/profile-pic.png";
import categoriesIcon from "../sideBar/img/3502685-removebg-preview.png";

import dropdown_foto from "./img/dropDownMenu.png";
import { getPosts } from "../../store/posts/postActions";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const getCategoriesData = async () => {
        let categories = await getCategories();
        setCategories(categories);
    };
    useEffect(() => {
        getCategoriesData();
        dispatch(getPosts());
    }, []);

    let user = localStorage.getItem("user");
    let preUser = JSON.parse(localStorage.getItem("user"));
    function getPrem() {
        let premium = preUser.isPremium;
        return premium;
    }
    console.log(user);

    return (
        <>
            <div className={styles.navBar}>
                <div
                    className={styles.left__block}
                    onClick={() => navigate("/")}>
                    <img src={logo} width="40%" alt="" />
                </div>
                <div className={styles.right__block}>
                    {user ? (
                        <>
                            {getPrem() && (
                                <button
                                    className={styles.add_question_btn}
                                    onClick={() => navigate("/post-create")}>
                                    <img
                                        src={askQuestion}
                                        alt=""
                                        className={styles.askIcon}
                                    />
                                    Ask question
                                </button>
                            )}

                            {/* // сюда надо добавить тернарку на то что есть
                            уведомление или нет */}
                            <div className={styles.notificationFoto}>
                                <img src={notificationFalse} alt="" />
                            </div>
                            <div className={styles.profileFoto}>
                                <img
                                    src={preUser.avatarImg}
                                    alt="profile-foto"
                                />
                            </div>

                            <div className={styles.dropdown}>
                                <div className={styles.dropdown_foto_div}>
                                    <img src={dropdown_foto} alt="" />
                                </div>
                                <div className={styles.dropdown_content}>
                                    <a
                                        href="#"
                                        onClick={() =>
                                            navigate("/get-premium")
                                        }>
                                        Get Premium!
                                    </a>
                                    <a href="#" onClick={() => logout()}>
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <button
                                className={styles.register__btn}
                                onClick={() => navigate("/register")}>
                                <img
                                    src={userPluce}
                                    alt=""
                                    className={styles.register_img}
                                />
                                register
                            </button>
                            <button
                                className={styles.login__btn}
                                onClick={() => navigate("/login")}>
                                login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
