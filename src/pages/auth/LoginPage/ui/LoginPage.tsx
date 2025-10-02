import { BookOpen } from 'lucide-react';;
import styles from "./LoginPage.module.css";
import AuthForm from "../../../../features/authentication/ui";

const LoginPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {/* Logo and Title */}
                <div className={styles.logoTitle}>
                    <div className={styles.logoRow}>
                        <div className={styles.logoIcon}>
                            <BookOpen className={styles.logoSvg} />
                        </div>
                        <h1 className={styles.title}>EnTracker</h1>
                    </div>
                    <p className={styles.subtitle}>
                        Track your English learning progress
                    </p>
                </div>

                {/* Auth Forms */}
                <AuthForm/>

                {/* Footer */}
                <div className={styles.footer}>
                    <p>© 2024 EnTracker. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;