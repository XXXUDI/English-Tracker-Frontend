import {Card, CardContent, CardHeader, CardTitle} from "../../../../shared/ui/Card/Card.tsx";
import styles from "./AuthForm.module.css";
import {AuthTabs} from "../AuthTabs/AuthTabs.tsx";
import {GoogleLoginButton} from "../GoogleLoginButton/GoogleLoginButton.tsx";


export const AuthForm = () => {

    const isLoading = false;

    return (
        <Card>
            <CardHeader>
                <CardTitle className={styles.cardTitle}>Welcome to EnTracker</CardTitle>
            </CardHeader>
            <CardContent>

                <AuthTabs isLoading={isLoading}/>

                {/* Separator */}
                <div className={styles.separator}>
                    <div className={styles.separatorLine}></div>
                    <span className={styles.separatorText}>or continue with</span>
                    <div className={styles.separatorLine}></div>
                </div>

                {/* Google Sign In */}
                <GoogleLoginButton isLoading={isLoading} />
            </CardContent>
        </Card>
    );

}