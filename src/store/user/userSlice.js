import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./userActions";
import { addDataToLocalStorage } from "../../helpers/functions";
import { act } from "react-dom/test-utils";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        status: "",
    },
    reducers: {
        clearStatusState: (state) => {
            state.status = "";
        },
        clearUserState: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                if (action.payload.filteredUser == undefined) {
                    state.loading = false;
                    state.status = "wrong";
                } else {
                    state.loading = false;
                    state.user = action.payload.filteredUser;
                    addDataToLocalStorage(
                        action.payload.filteredUser.username,
                        action.payload.filteredUser.avatarImg
                    );
                    action.payload.navigate("/");
                    console.log(state.user);
                }
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.status = "wrong";
            });
    },
});

export const { clearStatusState, clearUserState } = userSlice.actions;
export default userSlice.reducer;
