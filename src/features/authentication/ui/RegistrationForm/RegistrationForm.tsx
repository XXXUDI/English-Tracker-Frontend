import styles from "./RegistrationPage.module.css"
import {Label} from "../../../../shared/ui/Label/Label.tsx";
import {Input} from "../../../../shared/ui/Input/Input.tsx";
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {cn} from "../../../../shared/helpers/cn";
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {useRegisterMutation} from "../../../../entities/auth/api/authApi.ts";
import type { RegistrationFormValues} from "../../../../entities/auth/model/types/auth.ts";

const RegistrationForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [registerForm, setRegisterForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });


    const [registerMutation, {isLoading}] = useRegisterMutation();


    const onRegister = async (data: RegistrationFormValues) => {
        await registerMutation(data)
    };

    const handleSubmit = (callback: (data: RegistrationFormValues) => void) => (e: React.FormEvent) => {
        e.preventDefault();
        callback(registerForm);
    }

    return (
        <form onSubmit={handleSubmit(onRegister)} className={styles.spaceY4}>
            <div className={styles.spaceY2}>
                <Label htmlFor="register-name">Full Name</Label>
                <Input
                    id="register-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={registerForm.fullName}
                    onChange={(e) => setRegisterForm({...registerForm, fullName: e.target.value})}
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
    );
};

export default RegistrationForm;