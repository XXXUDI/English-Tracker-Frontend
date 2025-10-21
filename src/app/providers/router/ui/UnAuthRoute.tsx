import {Navigate} from "react-router";
import {getFromLS} from "../../../../shared/helpers/manageLocalStorage/manageLocalStorage.ts";
import {LS_ACCESS_TOKEN_KEY} from "../../../../shared/constants/authConstants.ts";
import {ROUTES} from "../../../../shared/config/router/routes.ts";

interface UnAuthRouteProps {
    children: React.ReactNode;
}

export const UnAuthRoute: React.FC<UnAuthRouteProps> = ({children}: UnAuthRouteProps) => {

    const isAuth = getFromLS(LS_ACCESS_TOKEN_KEY);
    // default redirect to profile page
    const replaceUrl = ROUTES.platform.profile.route;

    return !isAuth ? <>{children}</> : <Navigate to={replaceUrl} />;
}