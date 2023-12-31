import { createSlice } from "@reduxjs/toolkit";
import { getOnePost, getPosts } from "./postActions";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        posts: [],
        onePost: null,
        search: "",
        currentPage: 1,
        totalPages: 1,
        currentCategory: "",
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
        changeCategory: (state, action) => {
            state.currentCategory = action.payload.category;
            state.currentPage = 1;
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
        // .addCase(addComments.fulfilled, (state, action) => {
        //     state.
        // });
    },
});

export const {
    clearOnePostState,
    changeSearchVal,
    changePage,
    changeCategory,
} = postsSlice.actions;

export default postsSlice.reducer;
