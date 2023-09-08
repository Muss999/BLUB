import { createSlice } from "@reduxjs/toolkit";
import { getOnePost, getPosts } from "./postActions";
import { act } from "react-dom/test-utils";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        posts: [],
        onePost: null,
        search: "",
        currentPage: 1,
        totalPages: 1,
    },
    reducers: {
        clearOnePostState: (state) => {
            state.onePost = null;
        },
        changeSearchVal: (state, action) => {
            state.search = action.payload.search;
            state.currentPage = 1;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload.page;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;

                state.posts = action.payload.res.data;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(getPosts.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getOnePost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getOnePost.fulfilled, (state, action) => {
                state.loading = false;
                state.onePost = action.payload.data;
            })
            .addCase(getOnePost.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { clearOnePostState, changeSearchVal, changePage } =
    postsSlice.actions;

export default postsSlice.reducer;
