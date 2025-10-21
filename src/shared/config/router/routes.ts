export const ROUTES = {

    appRoute: '/',
    adminRoute: '/admin',
    auth: {
        route: 'auth',
        login: {
            route: 'login',
            page: '/auth/login'
        },
        register: {
            route: 'register',
            page: '/auth/register',
        },
        'forgot-password': {
            route: 'forgot-password',
            page: '/auth/forgot-password'
        },
        'password-recovery': {
            route: 'password-recovery',
            page: '/auth/password-recovery'
        }
    },
    platform: {
        route: 'platform',
        dashboard: {
            route: 'dashboard',
            page: '/dashboard'
        },
        profile: {
            route: 'profile',
            page: '/profile'
        }
    }
} as const;