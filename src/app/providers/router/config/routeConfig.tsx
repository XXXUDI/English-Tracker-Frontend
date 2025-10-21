// Import your icons and pages here, then add them to some route config object


import {createBrowserRouter} from "react-router";
import {ROUTES} from "../../../../shared/config/router/routes";
import {UnAuthRoute} from "../ui/UnAuthRoute";
import {AuthLayout} from "../../../layouts/AuthLayout/ui";
import LoginPage from "../../../../pages/auth/LoginPage/ui/LoginPage";
import {AuthRoute} from "../ui/AuthRoute.tsx";
import {MainLayout} from "../../../layouts/MainLayout/ui/MainLayout.tsx";
import DashboardPage from "../../../../pages/dashboard/DashboardPage/ui/DashboardPage.tsx";

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
                element: <LoginPage/>
            },
            {
                path: ROUTES.auth['forgot-password'].route,
                // element: <ForgotPasswordPage/>
                element : <>FORGOT PASSWORD PAGE</>
            }
        ]
    },
    {
        path: ROUTES.auth["password-recovery"].route,
        // element: <PasswordRecoveryPage/>,
        element: <>PASSWORD RECOVERY PAGE</>
    },
    {
        path: ROUTES.platform.route,
        element: (
            <AuthRoute>
                <MainLayout/>
            </AuthRoute>
        ),
        children: [
            {
                path: ROUTES.platform.dashboard.route,
                element: <DashboardPage/>
            }
        ]
    }
]);