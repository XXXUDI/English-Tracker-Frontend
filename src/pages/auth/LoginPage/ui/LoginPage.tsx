import {Card, CardContent, CardHeader, CardTitle } from "../../../../shared/ui/Card/Card.tsx";
import { Eye, EyeOff, BookOpen } from 'lucide-react';
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {Tabs, TabsContent, TabsTrigger, TabsList} from "../../../../shared/ui/Tabs/Tabs.tsx";
import {useState} from "react";
import {Input} from "../../../../shared/ui/Input/Input.tsx";
import {Label} from "../../../../shared/ui/Label/Label.tsx";
import styles from "./LoginPage.module.css";
import { cn } from "../../../../shared/helpers/cn";

const LoginPage = () => {

    const handleLogin = () => { return null };
    const handleRegister = () => { return null };
    const handleGoogleLogin = () => { return null };
    const isLoading = false;
    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

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

                {/* Demo Access */}
                {/*<Card className={styles.demoCard}>*/}
                {/*    <CardContent className={styles.demoCardContent}>*/}
                {/*        <div className={cn(styles.textCenter, styles.spaceY4)}>*/}
                {/*            <p className={styles.demoText}>*/}
                {/*                Want to try EnTracker without signing up?*/}
                {/*            </p>*/}
                {/*            <Button*/}
                {/*                variant="outline"*/}
                {/*                // onClick={handleDemoLogin}*/}
                {/*                className={cn(styles.wFull, styles.borderBlue)}*/}
                {/*            >*/}
                {/*                Continue as Demo User*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}

                {/* Auth Forms */}
                <Card>
                    <CardHeader>
                        <CardTitle className={styles.cardTitle}>Welcome to EnTracker</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                                    <Button variant="link" className={cn(styles.textSm, styles.subtitle)}>
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

                        {/* Separator */}
                        <div className={styles.separator}>
                            <div className={styles.separatorLine}></div>
                            <span className={styles.separatorText}>or continue with</span>
                            <div className={styles.separatorLine}></div>
                        </div>

                        {/* Google Sign In */}
                        <Button
                            variant="outline"
                            className={styles.wFull}
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                        >
                            <svg className={styles.mr2} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            {isLoading ? 'Connecting...' : 'Continue with Google'}
                        </Button>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className={styles.footer}>
                    <p>© 2024 EnTracker. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;