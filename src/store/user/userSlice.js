import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        status: "",
    },
});

export default userSlice.reducer;
