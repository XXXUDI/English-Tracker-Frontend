import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {getFromLS} from "../../helpers/manageLocalStorage/manageLocalStorage.ts";
import {LS_ACCESS_TOKEN_KEY} from "../../constants/authConstants.ts";
import {createApi} from "@reduxjs/toolkit/query/react";
import {ApiTags} from "./apiTags.ts";
import {apiAccessTokenIsBrokenEvent} from "./apiAccessTokenIsBrokenEvent.ts";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.GATEWAY_BASE_URL || 'http://localhost:8080/api', // Spring Boot API Gateway URL
    credentials: 'include',
    prepareHeaders: (headers) => {
        const accessToken = getFromLS(LS_ACCESS_TOKEN_KEY);
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // determine the request url whether args is a string or FetchArgs
    const requestUrl = typeof args === 'string' ? args : (args as FetchArgs).url;

    if ((result.error as FetchBaseQueryError)?.status === 401 && requestUrl !== '/auth/refresh') {
        const refreshResult = await baseQuery({
            url: '/auth/refresh',
            method: 'GET',
        } as FetchArgs, api, extraOptions);

        if (refreshResult.data) {
            const accessToken = (refreshResult.data as {accessToken?: string})?.accessToken;
            if (accessToken) {
                localStorage.setItem(LS_ACCESS_TOKEN_KEY, accessToken);
            }
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(apiAccessTokenIsBrokenEvent());
        }
    }

    return result;
}

export const baseApi = createApi({
    tagTypes: Object.values(ApiTags) as string[],
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
})