import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";
import { getTotalPages } from "../../helpers/functions";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, { getState }) => {
        const { search, currentPage, currentCategory } = getState().posts;
        const categoryAndSearch = `q=${search}${
            currentCategory && `&type=${currentCategory}`
        }`;
        const pagesLimit = `?_page=${currentPage}&_limit=10`;
        const totalPages = await getTotalPages(
            `${POSTS_API}?${categoryAndSearch}`
        );
        const res = await axios.get(
            `${POSTS_API}${pagesLimit}&q=${search}${
                currentCategory && `&category=${currentCategory}`
            }`
        );
        return { res, totalPages };
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
