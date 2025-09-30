export const ROUTES = {
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
    profile: {
        route: 'profile',
        page: '/dashboard/profile',
        edit: {
            route: 'edit',
            page: '/dashboard/profile/edit'
        }
    },
    settings: {
        route: 'settings',
        page: '/dashboard/settings',
    }
} as const;