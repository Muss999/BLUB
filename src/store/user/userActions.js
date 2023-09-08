import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async ({ user }) => {
        let res1 = await axios.get(ACCOUNT_API);
        console.log(res1);
        let a = res1.data.find((userDB) => userDB.username == user.username);

        if (a) {
            alert("This user are already exists");
            return;
        } else {
            let res = await axios.post(`${ACCOUNT_API}`, user);
            return { res };
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ user, navigate }) => {
        let res = await axios.get(`${ACCOUNT_API}`);
        let filteredUser = res.data.filter(
            (userDB) =>
                userDB.username == user.username &&
                userDB.password == user.password
        );
        return { filteredUser, navigate, filteredUser: filteredUser[0] };
    }
);

export const getUser = createAsyncThunk("user/getUser", async () => {
    let res = await axios.get(ACCOUNT_API);
    return res;
});
