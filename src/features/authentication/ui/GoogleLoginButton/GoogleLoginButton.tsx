import {Button} from "../../../../shared/ui/Button/Button";
import styles from "./GoogleLoginButton.module.css";
import {useGoogleLoginMutation} from "../../../../entities/auth/api/authApi.ts";
import {useGoogleLogin} from "@react-oauth/google";


export const GoogleLoginButton = () => {

    const [googleLogin, {isLoading}] = useGoogleLoginMutation();

    const handleSuccess = (resp: unknown) => {
        console.log('Got Google response:', resp);

        const process = async (response: unknown) => {
            try {
                // Prefer `credential` (id_token / JWT) if present
                if (response && typeof response === 'object' && 'credential' in response) {
                    const respObj = response as { credential?: string };
                    if (respObj.credential) {
                        await googleLogin({ token: respObj.credential }).unwrap();
                        return;
                    }
                }

                // Fallback: if access_token present (implicit/token flow)
                if (response && typeof response === 'object' && 'access_token' in response) {
                    const respObj = response as { access_token?: string };
                    if (respObj.access_token) {
                        await googleLogin({ token: respObj.access_token }).unwrap();
                        return;
                    }
                }

                // Fallback: if code present (auth-code flow)
                if (response && typeof response === 'object' && 'code' in response) {
                    const respObj = response as { code?: string };
                    if (respObj.code) {
                        await googleLogin({ token: respObj.code }).unwrap();
                        return;
                    }
                }

                console.warn('Unrecognized Google response shape, nothing to send to backend:', response);
            } catch (err) {
                console.error('Failed to login with Google:', err);
            }
        };

        void process(resp);
    };

    const handleError = () => {
        console.error('Google Login Failed');
    };

    const loginViaGoogle = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: handleError,
    });

    return (
        <Button
            variant="outline"
            className={styles.wFull}
            onClick={() => loginViaGoogle()}
            disabled={isLoading}
        >
            <svg className={styles.mr2} viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {isLoading ? 'Connecting...' : 'Continue with Google'}
        </Button>
    );
}