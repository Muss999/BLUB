import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import logo from "./img/загружено-removebg-preview.png";
import userPluce from "./img/user-plus-1-removebg-preview.png";
import askQuestion from "./img/262038-removebg-preview.png";

const Navbar = () => {
    const navigate = useNavigate();
    let user = localStorage.getItem("user");
    return (
        <>
            <div className={styles.navBar}>
                <div
                    className={styles.left__block}
                    onClick={() => navigate("/")}
                >
                    <img src={logo} width="40%" alt="" />
                </div>
                <div className={styles.right__block}>
                    {user ? (
                        <button className={styles.add_question_btn}>
                            <img
                                src={askQuestion}
                                alt=""
                                className={styles.askIcon}
                            />
                            Ask question
                        </button>
                    ) : (
                        <>
                            <button
                                className={styles.register__btn}
                                onClick={() => navigate("/register")}
                            >
                                <img
                                    src={userPluce}
                                    alt=""
                                    className={styles.register_img}
                                />
                                register
                            </button>
                            <button
                                className={styles.login__btn}
                                onClick={() => navigate("/login")}
                            >
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
