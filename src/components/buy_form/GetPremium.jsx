import React from "react";
import styles from "./getPremium.module.css";
import { getPremiumFunc } from "../../helpers/functions";
import { useNavigate } from "react-router-dom";

const GetPremium = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.main_div}>
            <div className={styles.main_div_inner}>
                <h1 className={styles.buy_h1}>Get Premium!!!</h1>
                <p className={styles.buy_desc}>
                    ПРЕМ ИСЧЕЗНЕТ ПОСЛЕ ВЫХОДА С АККАУНТА. ТАКОВА ПОЛИТИКА НАШЕЙ
                    КОМПАНИИ
                </p>
                <div
                    onClick={() => {
                        getPremiumFunc();
                        navigate("/");
                    }}
                    className={styles.div_buy}
                >
                    <p>
                        3.70$
                        <br />
                        Buy!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;
