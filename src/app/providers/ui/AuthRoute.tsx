import { LS_ACCESS_TOKEN_KEY } from "../../../shared/constants/authConstants.ts";
import {getFromLS} from "../../../shared/helpers/manageLocalStorage/manageLocalStorage.ts";
import { ROUTES } from "../../../shared/config/router/routes.ts";


import {Navigate, useLocation} from "react-router";

interface AuthRouteProps {
  children: React.ReactNode;
}

export const AuthRoute = ({ children }: AuthRouteProps) => {
    const isAuthenticated = getFromLS(LS_ACCESS_TOKEN_KEY);
    const location = useLocation();
    const replaceUrl = ROUTES.auth.login.page + `?returnPage=${encodeURIComponent(location.pathname)}`;

    // If Navigate will throw exception then change the import to import { Navigate } from 'react-router-dom';
    return isAuthenticated ? <>{children}</> : <Navigate to={replaceUrl} replace={true} />
}