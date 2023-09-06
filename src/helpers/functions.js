import axios from "axios";
import { ACCOUNT_API } from "./consts";

export const addDataToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const checkUserLogin = () => {
    let user = localStorage.getItem("user");
    if (!user) return false;
    return true;
};
