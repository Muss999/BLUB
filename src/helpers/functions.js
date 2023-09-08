import axios from "axios";

export const addDataToLocalStorage = (username, avatarImg, isPremium) => {
    localStorage.setItem(
        "user",
        JSON.stringify({ username, avatarImg, isPremium })
    );
};

export const getPremiumFunc = async () => {
    let a = JSON.parse(localStorage.getItem("user"));

    let b = { ...a, isPremium: true };
    localStorage.setItem("user", JSON.stringify(b));
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
