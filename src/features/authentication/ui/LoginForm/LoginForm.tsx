import { useState} from 'react';
import {Label} from "../../../../shared/ui/Label/Label";
import {Input} from "../../../../shared/ui/Input/Input";
import {Button} from "../../../../shared/ui/Button/Button";
import {cn} from "../../../../shared/helpers/cn";
import {Eye, EyeOff} from "lucide-react";
import {ROUTES} from "../../../../shared/config/router/routes";
import {useNavigate} from "react-router";
import styles from "./LoginForm.module.css";
import {useLoginMutation} from "../../../../entities/auth/api/authApi";
import type {LoginFormValues} from "../../../../entities/auth/model/types/auth";

const LoginForm = () => {

    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({email: '', password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const [loginMutation, {isLoading} ] = useLoginMutation();

    const onLogin = async (data: LoginFormValues) => {
        await loginMutation(data);
    }

    const handleForgotPassword = () => {
        navigate(ROUTES.auth["forgot-password"].page);
    }

    const handleSubmit = (callback: (data: LoginFormValues) => void) => (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login form submitted:", loginForm);
        callback(loginForm);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onLogin)} className={styles.spaceY4}>
                <div className={styles.spaceY2}>
                    <Label htmlFor="login-email">Email</Label>
                    {/*TODO: implement form control with react-hooks-form*/}
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
                                <EyeOff className={styles.eyeIcon}/>
                            ) : (
                                <Eye className={styles.eyeIcon}/>
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
        </>
    );
};

export default LoginForm;