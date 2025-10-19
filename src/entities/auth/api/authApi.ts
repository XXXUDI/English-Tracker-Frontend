import {baseApi} from "../../../shared/config/api/baseApi.ts";

import {authApiUrls} from "../model/constants/authConstatnt.ts";
import {LS_ACCESS_TOKEN_KEY} from "../../../shared/constants/authConstants.ts";
import {removeFromLS, setToLS} from "../../../shared/helpers/manageLocalStorage/manageLocalStorage.ts";
import {ROUTES} from "../../../shared/config/router/routes.ts";
import type {ExtraArgument} from "../../../shared/config/store/types.ts";
import type {
    LoginRequest,
    LoginResponse,
    RefreshResponse,
    RegisterRequest,
    RegisterResponse
} from "../model/types/auth.ts";


export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: authApiUrls.login,
                method: 'POST',
                body
            }),
            async onQueryStarted(_, { queryFulfilled, extra, dispatch}) {
                try {
                    dispatch(baseApi.util.resetApiState());
                    const result = await queryFulfilled;
                    setToLS(LS_ACCESS_TOKEN_KEY, result.data.accessToken);
                    const typedExtra = extra as ExtraArgument;
                    const searchParams = new URLSearchParams(window.location.search);
                    const returnPage = searchParams.get('returnPage') || ROUTES.profile.page;
                    typedExtra.navigate(returnPage);
                } catch (error) {
                    if(error && typeof error === 'object' && 'error' in error) {
                        const errObj = error as {error: {data: {message: string}}};
                        // toast.error(errObj.error.data.message);
                    }
                    console.error(error);
                }
            }
        }),
        register: build.mutation<RegisterResponse, RegisterRequest>({
            query: (body) => ({
                url: authApiUrls.register,
                method: 'POST',
                body
            }),
            async onQueryStarted(_, { queryFulfilled, extra, dispatch}) {
                try {
                    dispatch(baseApi.util.resetApiState());
                    const result = await queryFulfilled;
                    setToLS(LS_ACCESS_TOKEN_KEY, result.data.accessToken);
                    const typedExtra = extra as ExtraArgument;
                    typedExtra.navigate(ROUTES.profile.page);
                } catch (error) {
                    if(error && typeof error === 'object' && 'error' in error) {
                        const errObj = error as {error: {data: {message: string}}};
                        // toast.error(errObj.error.data.message);
                    }
                    console.error(error);
                }
            }
        }),
        refresh: build.mutation<RefreshResponse, void>({
            query: () => authApiUrls.refreshToken,
            async onQueryStarted(_, { queryFulfilled}) {
                try {
                    const result = await queryFulfilled;
                    setToLS(LS_ACCESS_TOKEN_KEY, result.data.accessToken);
                } catch (error) {
                    console.error('Refresh token error:', error);
                    removeFromLS(LS_ACCESS_TOKEN_KEY);
                }
            }

        })

        // TODO: add google login, profile, logout, refresh endpoints
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApi;