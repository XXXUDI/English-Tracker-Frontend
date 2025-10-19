import {configureStore} from "@reduxjs/toolkit";


export const setupReduxStore = () => {
    return configureStore({
        reducer: {},

    });
}

export const store = setupReduxStore();

export type RootState = ReturnType<typeof store.getState>;