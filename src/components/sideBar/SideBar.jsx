import React from "react";
import styles from "./sideBar.module.css";
import rankIcon from "./img/images-removebg-preview.png";
import searchIcon from "./img/download-black-search-icon-button-png-11640084021zgwjfva3zm-removebg-preview.png";
import categoriesIcon from "./img/3502685-removebg-preview.png";
import questionIcon from "./img/list-47-removebg-preview.png";

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.top__block}>
                <div className={styles.input__block}>
                    <img src={searchIcon} alt="" width="20px" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className={styles.main__block}>
                <p style={{ color: "grey" }}>menu</p>
                <div className={styles.sideBar_left_block}>
                    <img
                        src={questionIcon}
                        alt=""
                        className={styles.sideBar__img}
                    />
                    <p>questions</p>
                </div>
                <div className={styles.sideBar_left_block}>
                    <img
                        src={categoriesIcon}
                        alt=""
                        className={styles.sideBar__img}
                    />
                    <p>categories</p>
                </div>
                <div className={styles.sideBar_left_block}>
                    <img
                        src={rankIcon}
                        alt=""
                        className={styles.sideBar__img}
                    />
                    <p>rankits</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

// {
//     id,
//     user{
//         ..userlog
//     },
//     question,
//     desc,
//     like,
//     com
// }
