import {configureStore} from "@reduxjs/toolkit";
import {baseApi} from "../../../../../shared/config/api/baseApi.ts";
import {router} from "../../../router";
import {refreshMiddleware} from "../../../../../entities/auth/api/refreshMiddleware.ts";
import type {State} from "../../../../../shared/config/store/state.ts";


export const setupReduxStore = (initialState?: State) => {
    return configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
        },
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        navigate: router.navigate,
                    },
                },
            }).concat(
                baseApi.middleware,
                refreshMiddleware.middleware,
            ),
    });
}

export const config = setupReduxStore();

export type RootState = ReturnType<typeof config.getState>;