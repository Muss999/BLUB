import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import logo from "./img/загружено-removebg-preview.png";
import userPluce from "./img/user-plus-1-removebg-preview.png";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.navBar}>
                <div
                    className={styles.left__block}
                    onClick={() => navigate("/")}>
                    <img src={logo} width="40%" alt="" />
                </div>
                <div className={styles.right__block}>
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
                </div>
            </div>
        </>
    );
};

export default Navbar;
