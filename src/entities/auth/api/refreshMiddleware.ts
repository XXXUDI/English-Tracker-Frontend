import {createListenerMiddleware} from "@reduxjs/toolkit";
import {apiAccessTokenIsBrokenEvent} from "../../../shared/config/api/apiAccessTokenIsBrokenEvent.ts";
import {authApi} from "./authApi.ts";

export const refreshMiddleware = createListenerMiddleware();

const refreshMiddlewareStartListening = refreshMiddleware.startListening;

refreshMiddlewareStartListening({
    actionCreator: apiAccessTokenIsBrokenEvent,
    effect: async (_, api) => {
        api.dispatch(authApi.endpoints.refresh.initiate());
    },
});