import styles from "./AuthTabs.module.css"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../../../shared/ui/Tabs/Tabs.tsx";
import {Label} from "../../../../shared/ui/Label/Label.tsx";
import {Input} from "../../../../shared/ui/Input/Input.tsx";
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {cn} from "../../../../shared/helpers/cn";
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {ROUTES} from "../../../../shared/config/router/routes.ts";
import {useNavigate} from "react-router";

export const AuthTabs = ({isLoading} : {isLoading: boolean}) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const handleForgotPassword = () => {
        navigate(ROUTES.auth["forgot-password"].page);
    }

    const handleLogin = () => {
        console.log("Login form submitted:", loginForm);
        return null
    };
    const handleRegister = () => {
        console.log("Register form submitted:", registerForm);
        return null
    };

    return (
        <Tabs defaultValue="login" className={styles.tabs}>
            <TabsList className={styles.tabsList}>
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login" className={styles.spaceY4}>
                <form onSubmit={handleLogin} className={styles.spaceY4}>
                    <div className={styles.spaceY2}>
                        <Label htmlFor="login-email">Email</Label>
                        <Input
                            id="login-email"
                            type="email"
                            placeholder="Enter your email"
                            value={loginForm.email}
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                            required
                        />
                    </div>

                    <div className={styles.spaceY2}>
                        <Label htmlFor="login-password">Password</Label>
                        <div className={styles.relative}>
                            <Input
                                id="login-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={loginForm.password}
                                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className={cn(styles.absolute, styles.right2, styles.topHalf, styles.h8, styles.w8)}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className={styles.eyeIcon} />
                                ) : (
                                    <Eye className={styles.eyeIcon} />
                                )}
                            </Button>
                        </div>
                    </div>

                    <Button type="submit" className={styles.wFull} disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                </form>

                <div className={styles.textCenter}>
                    <Button variant="link" onClick={handleForgotPassword} className={cn(styles.textSm, styles.subtitle)}>
                        Forgot your password?
                    </Button>
                </div>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register" className={styles.spaceY4}>
                <form onSubmit={handleRegister} className={styles.spaceY4}>
                    <div className={styles.spaceY2}>
                        <Label htmlFor="register-name">Full Name</Label>
                        <Input
                            id="register-name"
                            type="text"
                            placeholder="Enter your full name"
                            value={registerForm.name}
                            onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                            required
                        />
                    </div>

                    <div className={styles.spaceY2}>
                        <Label htmlFor="register-email">Email</Label>
                        <Input
                            id="register-email"
                            type="email"
                            placeholder="Enter your email"
                            value={registerForm.email}
                            onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                            required
                        />
                    </div>

                    <div className={styles.spaceY2}>
                        <Label htmlFor="register-password">Password</Label>
                        <div className={styles.relative}>
                            <Input
                                id="register-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                value={registerForm.password}
                                onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className={cn(styles.absolute, styles.right2, styles.topHalf, styles.h8, styles.w8)}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className={styles.eyeIcon} />
                                ) : (
                                    <Eye className={styles.eyeIcon} />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className={styles.spaceY2}>
                        <Label htmlFor="register-confirm-password">Confirm Password</Label>
                        <Input
                            id="register-confirm-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={registerForm.confirmPassword}
                            onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                            required
                        />
                    </div>

                    <Button type="submit" className={styles.wFull} disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create Account'}
                    </Button>
                </form>

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