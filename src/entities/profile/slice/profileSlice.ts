import type {ProfileState} from "../type/profile.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {clearStore} from "../../../shared/config/store/clearStore.ts";

const initialState: ProfileState = {
    isEmailSent: false,
    fullProfile: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setEmailSent(state, action: PayloadAction<boolean>) {
            return state.isEmailSent = action.payload;
        },
        setFullProfile(state, action) {
            return state.fullProfile = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(clearStore, () => {
                return initialState;
            });
    }
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;

export const { setEmailSent, setFullProfile } = profileSlice.actions;

