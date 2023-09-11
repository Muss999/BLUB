import React, { useState, useEffect } from "react";
import styles from "./categories.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../helpers/functions";
import { changeCategory } from "../../../store/posts/postSlice";
import { getPosts } from "../../../store/posts/postActions";

const Categories = () => {
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
    return (
        <div className={styles.sideBar_left_block_category}>
            <div className={styles.dropdown_content_category}>
                <h3>Choose Category</h3>
                <a
                    onClick={() => {
                        navigate("/");

                        dispatch(changeCategory({ category: "" }));
                        dispatch(getPosts());
                    }}
                >
                    All
                </a>
                {categories.map((category, index) => (
                    <a
                        key={index}
                        onClick={() => {
                            navigate("/");
                            dispatch(changeCategory({ category }));
                            dispatch(getPosts());
                        }}
                    >
                        {category}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Categories;
