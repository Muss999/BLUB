import axios from "axios";
import { ACCOUNT_API } from "./consts";

export const addDataToLocalStorage = (username, avatarImg) => {
    localStorage.setItem("user", JSON.stringify({ username, avatarImg }));
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const checkUserLogin = () => {
    let user = localStorage.getItem("user");
    if (!user) return false;
    return true;
};

export const getTotalPages = async (url) => {
    const { data } = await axios.get(url);
    const totalPages = Math.ceil(data.length / 10);
    return totalPages;
};
