// Import your icons and pages here, then add them to some route config object


import {createBrowserRouter} from "react-router";
import {ROUTES} from "../../../../shared/config/router/routes.ts";
import {UnAuthRoute} from "../ui/UnAuthRoute.tsx";
import {AuthLayout} from "../../../layouts/AuthLayout/ui";

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
                // element: <LoginPage/>
                element: <h1>LOGIN PAGE</h1>
            },
            {
                path: ROUTES.auth.register.route,
                // element: <RegisterPage/>
                element: <>REGISTER PAGE</>
            },
            {
                path: ROUTES.auth['forgot-password'].route,
                // element: <ForgotPasswordPage/>
                element : <>FORGOT PASSWORD PAGE</>
            }
        ]
    },
    {
        path: ROUTES.auth["password-recovery"].page,
        // element: <PasswordRecoveryPage/>,
        element: <>PASSWORD RECOVERY PAGE</>
    }
]);