import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./userActions";
import { addDataToLocalStorage, getPremiumFunc } from "../../helpers/functions";
import { getUser } from "./userActions";
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
                        action.payload.filteredUser.avatarImg,
                        action.payload.filteredUser.isPremium
                    );
                    action.payload.navigate("/");
                }
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.status = "wrong";
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
            });
    },
});

export const { clearStatusState, clearUserState } = userSlice.actions;
export default userSlice.reducer;
