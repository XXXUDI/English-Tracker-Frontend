import styles from "./AuthTabs.module.css"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../../../shared/ui/Tabs/Tabs";
import {Button} from "../../../../shared/ui/Button/Button";
import {cn} from "../../../../shared/helpers/cn";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm.tsx";

export const AuthTabs = () => {


    return (
        <Tabs defaultValue="login" className={styles.tabs}>
            <TabsList className={styles.tabsList}>
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login" className={styles.spaceY4}>
                <LoginForm />
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register" className={styles.spaceY4}>

                <RegistrationForm/>

                <div className={cn(styles.textXs, styles.subtitle, styles.textCenter)}>
                    By creating an account, you agree to our{' '}
                    <Button variant="link" className={cn(styles.textXs, styles.p0, styles.hAuto)}>
                        Terms of Service
                    </Button>{' '}
                    and{' '}
                    <Button variant="link" className={cn(styles.textXs, styles.p0, styles.hAuto)}>
                        Privacy Policy
                    </Button>
                </div>
            </TabsContent>
        </Tabs>
    )
}