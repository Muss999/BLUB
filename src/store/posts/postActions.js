import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, { getState }) => {
        const { search } = getState().posts;

        const res = await axios.get(`${POSTS_API}?q=${search}`);
        return res;
    }
);

export const getOnePost = createAsyncThunk(
    "posts/getOnePost",
    async ({ id }) => {
        let res = await axios.get(`${POSTS_API}/${id}`);
        return res;
    }
);

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (newPostObj, { dispatch }) => {
        await axios.post(POSTS_API, newPostObj);
        dispatch(getPosts);
    }
);
