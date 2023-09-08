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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, porro. Molestias error laboriosam nostrum ullam unde
                    aut temporibus optio architecto pariatur accusamus culpa
                    facilis esse laborum, animi ipsa, assumenda eveniet.
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
