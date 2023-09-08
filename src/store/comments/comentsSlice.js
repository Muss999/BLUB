import { createSlice } from "@reduxjs/toolkit";
import { addComments } from "./commentsAction";

const commentsSlice = createSlice({
    name: "coments",
    initialState: {
        comments: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addComments.fulfilled, (state, acion) => {
            state.comments = acion.payload;
        });
    },
});

export default commentsSlice.reducer;
