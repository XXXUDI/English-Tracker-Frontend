// Import your icons and pages here, then add them to some route config object


import {createBrowserRouter} from "react-router";
import {ROUTES} from "../../../shared/config/router/routes.ts";

export const router = createBrowserRouter([
    {
        path: ROUTES.auth.route,
        element: (
            <UnAuthRoute>
                <AuthLayout/>
            </UnAuthRoute>
        ),
        children: [
            {
                path: ROUTES.auth.login.route,
                element: <LoginPage/>
            },
            {
                path: ROUTES.auth.register.route,
                element: <RegisterPage/>
            },
            {
                path: ROUTES.auth['forgot-password'].route,
                element: <ForgotPasswordPage/>
            }
        ]
    },
    {
        path: ROUTES.auth["password-recovery"].page,
        element: <PasswordRecoveryPage/>,
    }
]);