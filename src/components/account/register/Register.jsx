import React, { useState, useEffect } from "react";
import styles from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../store/user/userActions";
import { clearStatusState } from "../../../store/user/userSlice";
// foto
import regfoto from "./images/register-foto.png";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const { loading, status } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearStatusState());
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
                                            }
                                        >
                                            Try Again!
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div className={styles.register_form}>
                            <div className={styles.reg_left}>
                                <div className={styles.reg_left_inner}>
                                    <h2 className={styles.reg_h2}>
                                        Join BLUB community
                                    </h2>
                                    <p className={styles.reg_text}>
                                        Get more features and priviliges by
                                        joining to the most helpful community
                                    </p>
                                    <div className={styles.reg_left_inp}>
                                        <input
                                            className={styles.reg_form_inputs}
                                            type="text"
                                            placeholder="Username"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    username: e.target.value,
                                                })
                                            }
                                        />
                                        <input
                                            className={styles.reg_form_inputs}
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                        <button
                                            className={styles.reg_btn}
                                            onClick={() =>
                                                dispatch(
                                                    registerUser({
                                                        user,
                                                        navigate,
                                                    })
                                                )
                                            }
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.reg_foto}>
                                <img src={regfoto} alt="eror" />
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Register;
