import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async ({ user, navigate }) => {
        let res = await axios.post(`${ACCOUNT_API}`, user);
        return { res, navigate };
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ user, navigate }) => {
        let res = await axios.get(`${ACCOUNT_API}`);
        let filteredUser = res.data.filter(
            (userDB) => userDB.username == user.username
        );
        return { filteredUser, navigate, filteredUser: filteredUser[0] };
    }
);
