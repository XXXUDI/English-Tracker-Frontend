import {baseApi} from "../../../shared/config/api/baseApi";
import {authApiUrls} from "../model/constants/authConstatnt";
import {LS_ACCESS_TOKEN_KEY} from "../../../shared/constants/authConstants";
import {removeFromLS, setToLS} from "../../../shared/helpers/manageLocalStorage/manageLocalStorage";
import {ROUTES} from "../../../shared/config/router/routes";
import type {ExtraArgument} from "../../../shared/config/store/types";
import type {
    LoginRequest,
    LoginResponse,
    ProfileResponse,
    RefreshResponse,
    RegisterRequest,
    RegisterResponse
} from "../model/types/auth";
import {profileActions} from "../../profile/slice/profileSlice.ts";
import {ApiTags} from "../../../shared/config/api/apiTags.ts";


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
                    // dispatch(baseApi.util.resetApiState());
                    const result = await queryFulfilled;
                    setToLS(LS_ACCESS_TOKEN_KEY, result.data.accessToken);
                    const typedExtra = extra as ExtraArgument;
                    const searchParams = new URLSearchParams(window.location.search);
                    const returnPage = searchParams.get('returnPage') || ROUTES.platform.profile.route;
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
                    // dispatch(baseApi.util.resetApiState());
                    const result = await queryFulfilled;
                    setToLS(LS_ACCESS_TOKEN_KEY, result.data.accessToken);
                    const typedExtra = extra as ExtraArgument;
                    typedExtra.navigate(ROUTES.platform.profile.route);
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

        }),
        profile: build.query<ProfileResponse, void>({
            query: () => authApiUrls.profile,
            providesTags: [ApiTags.PROFILE],
            async onQueryStarted(_, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    dispatch(profileActions.setFullProfile(result.data));
                } catch(error) {
                    console.error('Error was occurred while fetching profile: ', error);
                }
            }
        })

        // TODO: add google login, profile, logout, refresh endpoints
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useProfileQuery,
} = authApi;