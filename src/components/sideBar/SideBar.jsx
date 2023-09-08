import React, { useState, useEffect } from "react";

import styles from "./sideBar.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../../store/posts/postActions";
import { changeSearchVal } from "../../store/posts/postSlice";

// img start
import rankIcon from "./img/images-removebg-preview.png";
import searchIcon from "./img/download-black-search-icon-button-png-11640084021zgwjfva3zm-removebg-preview.png";
import categoriesIcon from "./img/3502685-removebg-preview.png";
import questionIcon from "./img/list-47-removebg-preview.png";
// img end

const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    useEffect(() => {
        dispatch(changeSearchVal({ search }));
        dispatch(getPosts());
    }, [search]);
    return (
        <div className={styles.sideBar}>
            <div className={styles.top__block}>
                <div className={styles.input__block}>
                    <img src={searchIcon} alt="" width="20px" />
                    <input
                        className={styles.search_input}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className={styles.main__block}>
                <p style={{ color: "grey" }}>menu</p>
                <div
                    className={styles.sideBar_left_block}
                    onClick={() => navigate("/")}
                >
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
