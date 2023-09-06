import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import postSlice from "./posts/postSlice";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        user: userSlice,
        posts: postSlice,
    },
});
