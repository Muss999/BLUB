import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";

export const addComments = createAsyncThunk(
    "comments/addComments",
    async ({ newPostsObj }) => {
        let posts = await axios.patch(
            `${POSTS_API}/${newPostsObj.id}`,
            newPostsObj
        );
        return posts;
    }
);
