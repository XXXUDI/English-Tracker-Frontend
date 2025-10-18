import { LS_ACCESS_TOKEN_KEY} from "../../../shared/constants/authConstants.ts";
import axios from 'axios'; // <- use this instead of fetch while we don't migrate to RTK Query

// Here we will axios to make requests to the backend.
// But instead of axios, we should use Redux Toolkit Query (RTK Query) to manage our API calls and state in a more efficient way.

import { authApiUrls} from "../model/constants/authConstatnt.ts";

import {
    LoginRequest,
    LoginResponse,
    RegisterResponse,
    RegisterRequest,
    RefreshResponse,
    ProfileResponse
} from "../model/types/auth.ts"
import {setToLS} from "../../../shared/helpers/manageLocalStorage/manageLocalStorage.ts";
import {ROUTES} from "../../../shared/config/router/routes.ts";


// TODO: Rework using Axios or RTK Query
export const useLoginMutation = async (data: LoginRequest) => {
    try {
        console.log("authApi: useLoginMutation called with data:", data);
        const response = await fetch(authApiUrls.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        setToLS(LS_ACCESS_TOKEN_KEY, response.data.access_token);
        // const searchParams = new URLSearchParams(window.location.search);
        // const returnPage = searchParams.get("returnPage") || ROUTES.profile.page;
        // navigate(returnPage);
        // TODO: We cannot use navigate here, because this is not a React component, so we should return the response and handle navigation in the component.
        // or jest use Redux toolkit to handle navigation in a middleware
    } catch (error) {
        if(error && typeof error === "object" && `error` in error) {
            const errObj = error as { error: { data: { message: string } } };
            // toast.error(i18n.t('toast.' + errObj.error.data.message));
            console.error(errObj);
        } else {
            console.error("An unexpected error occurred:", error);
        }
    }
}


