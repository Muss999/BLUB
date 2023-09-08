import React from "react";
import styles from "./footer.module.css";
import Pagination from "../posts/Pagination";

const Footer = () => {
    return (
        <div className={styles.footer_div}>
            <div className={styles.pagination}>
                <Pagination />
            </div>
        </div>
    );
};

export default Footer;
