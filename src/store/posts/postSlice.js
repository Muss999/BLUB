import { createSlice } from "@reduxjs/toolkit";
import { getOnePost, getPosts } from "./postActions";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        posts: [],
        onePost: null,
    },
    reducers: {
        clearOnePostState: (state) => {
            state.onePost = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload.data;
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

export const { clearOnePostState } = postsSlice.actions;

export default postsSlice.reducer;
