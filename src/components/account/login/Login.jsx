import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/user/userActions";
import {
    clearStatusState,
    clearUserState,
} from "../../../store/user/userSlice";
import logFoto from "./images/log-foto.png";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const { loading, status } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(clearStatusState);
        dispatch(clearUserState);
    }, []);

    return (
        <>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {status ? (
                        <>
                            {status === "wrong" && (
                                <>
                                    <div>
                                        <h3>Error!!!</h3>
                                        <button
                                            onClick={() =>
                                                dispatch(clearStatusState())
                                            }>
                                            Try Again!
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={styles.login_form}>
                                <div className={styles.log_left}>
                                    <div className={styles.log_left_inner}>
                                        <h2 className={styles.log_h2}>
                                            We’ve missed you!
                                        </h2>
                                        <p className={styles.log_text}>
                                            A lot of questions are waiting for
                                            your wise suggestions!
                                        </p>
                                        <div className={styles.log_left_inp}>
                                            <input
                                                className={
                                                    styles.log_form_inputs
                                                }
                                                type="text"
                                                placeholder="Username"
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <input
                                                className={
                                                    styles.log_form_inputs
                                                }
                                                type="password"
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        password:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <button
                                                className={styles.log_btn}
                                                onClick={() =>
                                                    dispatch(
                                                        loginUser({
                                                            user,
                                                            navigate,
                                                        })
                                                    )
                                                }>
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.log_foto}>
                                    <img src={logFoto} alt="eror" />
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Login;
