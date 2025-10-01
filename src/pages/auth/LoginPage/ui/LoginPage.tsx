import {Card, CardContent, CardHeader, CardTitle } from "../../../../shared/ui/Card/Card.tsx";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                {/* Logo and Title */}
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            {/*<BookOpen className="w-6 h-6 text-primary-foreground" />*/}
                        </div>
                        <h1 className="text-3xl font-bold text-foreground">EnTracker</h1>
                    </div>
                    <p className="text-muted-foreground">
                        Track your English learning progress
                    </p>
                </div>

                {/* Demo Access */}
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                        <div className="text-center space-y-3">
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                Want to try EnTracker without signing up?
                            </p>
                            {/*<Button*/}
                            {/*    variant="outline"*/}
                            {/*    // onClick={handleDemoLogin}*/}
                            {/*    className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950"*/}
                            {/*>*/}
                            {/*    Continue as Demo User*/}
                            {/*</Button>*/}
                        </div>
                    </CardContent>
                </Card>

                {/* Auth Forms */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">Welcome to EnTracker</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/*<Tabs defaultValue="login" className="w-full">*/}
                        {/*    /!*<TabsList className="grid w-full grid-cols-2">*!/*/}
                        {/*    /!*    <TabsTrigger value="login">Sign In</TabsTrigger>*!/*/}
                        {/*    /!*    <TabsTrigger value="register">Sign Up</TabsTrigger>*!/*/}
                        {/*    /!*</TabsList>*!/*/}

                        {/*    /!* Login Form *!/*/}
                        {/*    <TabsContent value="login" className="space-y-4">*/}
                        {/*        <form onSubmit={handleLogin} className="space-y-4">*/}
                        {/*            <div className="space-y-2">*/}
                        {/*                <Label htmlFor="login-email">Email</Label>*/}
                        {/*                <Input*/}
                        {/*                    id="login-email"*/}
                        {/*                    type="email"*/}
                        {/*                    placeholder="Enter your email"*/}
                        {/*                    value={loginForm.email}*/}
                        {/*                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}*/}
                        {/*                    required*/}
                        {/*                />*/}
                        {/*            </div>*/}

                        {/*            <div className="space-y-2">*/}
                        {/*                <Label htmlFor="login-password">Password</Label>*/}
                        {/*                <div className="relative">*/}
                        {/*                    <Input*/}
                        {/*                        id="login-password"*/}
                        {/*                        type={showPassword ? "text" : "password"}*/}
                        {/*                        placeholder="Enter your password"*/}
                        {/*                        value={loginForm.password}*/}
                        {/*                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}*/}
                        {/*                        required*/}
                        {/*                    />*/}
                        {/*                    <Button*/}
                        {/*                        type="button"*/}
                        {/*                        variant="ghost"*/}
                        {/*                        size="icon"*/}
                        {/*                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"*/}
                        {/*                        onClick={() => setShowPassword(!showPassword)}*/}
                        {/*                    >*/}
                        {/*                        {showPassword ? (*/}
                        {/*                            <EyeOff className="h-4 w-4" />*/}
                        {/*                        ) : (*/}
                        {/*                            <Eye className="h-4 w-4" />*/}
                        {/*                        )}*/}
                        {/*                    </Button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            <Button type="submit" className="w-full" disabled={isLoading}>*/}
                        {/*                {isLoading ? 'Signing in...' : 'Sign In'}*/}
                        {/*            </Button>*/}
                        {/*        </form>*/}

                        {/*        <div className="text-center">*/}
                        {/*            <Button variant="link" className="text-sm text-muted-foreground">*/}
                        {/*                Forgot your password?*/}
                        {/*            </Button>*/}
                        {/*        </div>*/}
                        {/*    </TabsContent>*/}

                        {/*    /!* Register Form *!/*/}
                        {/*    <TabsContent value="register" className="space-y-4">*/}
                        {/*        <form onSubmit={handleRegister} className="space-y-4">*/}
                        {/*            <div className="space-y-2">*/}
                        {/*                <Label htmlFor="register-name">Full Name</Label>*/}
                        {/*                <Input*/}
                        {/*                    id="register-name"*/}
                        {/*                    type="text"*/}
                        {/*                    placeholder="Enter your full name"*/}
                        {/*                    value={registerForm.name}*/}
                        {/*                    onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}*/}
                        {/*                    required*/}
                        {/*                />*/}
                        {/*            </div>*/}

                        {/*            <div className="space-y-2">*/}
                        {/*                <Label htmlFor="register-email">Email</Label>*/}
                        {/*                <Input*/}
                        {/*                    id="register-email"*/}
                        {/*                    type="email"*/}
                        {/*                    placeholder="Enter your email"*/}
                        {/*                    value={registerForm.email}*/}
                        {/*                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}*/}
                        {/*                    required*/}
                        {/*                />*/}
                        {/*            </div>*/}

                        {/*            <div className="space-y-2">*/}
                        {/*                <Label htmlFor="register-password">Password</Label>*/}
                        {/*                <div className="relative">*/}
                        {/*                    <Input*/}
                        {/*                        id="register-password"*/}
                        {/*                        type={showPassword ? "text" : "password"}*/}
                        {/*                        placeholder="Create a password"*/}
                        {/*                        value={registerForm.password}*/}
                        {/*                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}*/}
                        {/*                        required*/}
                        {/*                    />*/}
                        {/*                    <Button*/}
                        {/*                        type="button"*/}
                        {/*                        variant="ghost"*/}
                        {/*                        size="icon"*/}
                        {/*                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"*/}
                        {/*                        onClick={() => setShowPassword(!showPassword)}*/}
                        {/*                    >*/}
                        {/*                        {showPassword ? (*/}
                        {/*                            <EyeOff className="h-4 w-4" />*/}
                        {/*                        ) : (*/}
                        {/*                            <Eye className="h-4 w-4" />*/}
                        {/*                        )}*/}
                        {/*                    </Button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            <div className="space-y-2">*/}
                        {/*                <Label htmlFor="register-confirm-password">Confirm Password</Label>*/}
                        {/*                <Input*/}
                        {/*                    id="register-confirm-password"*/}
                        {/*                    type={showPassword ? "text" : "password"}*/}
                        {/*                    placeholder="Confirm your password"*/}
                        {/*                    value={registerForm.confirmPassword}*/}
                        {/*                    onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}*/}
                        {/*                    required*/}
                        {/*                />*/}
                        {/*            </div>*/}

                        {/*            <Button type="submit" className="w-full" disabled={isLoading}>*/}
                        {/*                {isLoading ? 'Creating account...' : 'Create Account'}*/}
                        {/*            </Button>*/}
                        {/*        </form>*/}

                        {/*        <div className="text-xs text-muted-foreground text-center">*/}
                        {/*            By creating an account, you agree to our{' '}*/}
                        {/*            <Button variant="link" className="text-xs p-0 h-auto">*/}
                        {/*                Terms of Service*/}
                        {/*            </Button>{' '}*/}
                        {/*            and{' '}*/}
                        {/*            <Button variant="link" className="text-xs p-0 h-auto">*/}
                        {/*                Privacy Policy*/}
                        {/*            </Button>*/}
                        {/*        </div>*/}
                        {/*    </TabsContent>*/}
                        {/*</Tabs>*/}

                        {/* Separator */}
                        <div className="relative my-6">
                            {/*<Separator />*/}
                            <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-2 text-sm text-muted-foreground">
                  or continue with
                </span>
                            </div>
                        </div>

                        {/* Google Sign In */}
                        {/*<Button*/}
                        {/*    variant="outline"*/}
                        {/*    className="w-full"*/}
                        {/*    onClick={handleGoogleLogin}*/}
                        {/*    disabled={isLoading}*/}
                        {/*>*/}
                        {/*    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">*/}
                        {/*        <path*/}
                        {/*            fill="currentColor"*/}
                        {/*            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"*/}
                        {/*        />*/}
                        {/*        <path*/}
                        {/*            fill="currentColor"*/}
                        {/*            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"*/}
                        {/*        />*/}
                        {/*        <path*/}
                        {/*            fill="currentColor"*/}
                        {/*            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"*/}
                        {/*        />*/}
                        {/*        <path*/}
                        {/*            fill="currentColor"*/}
                        {/*            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"*/}
                        {/*        />*/}
                        {/*    </svg>*/}
                        {/*    {isLoading ? 'Connecting...' : 'Continue with Google'}*/}
                        {/*</Button>*/}
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center text-xs text-muted-foreground">
                    <p>© 2024 EnTracker. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;