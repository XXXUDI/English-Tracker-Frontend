export interface LoginFormValues {
    email: string;
    password: string;
}

export interface RegistrationFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthResponse {
    accessToken: string;
    user: User;
}

export interface User {
    id: string;
    email: string,
    createdAt: Date,
    updatedAt: Date,
    emailVerified: boolean,
    userRoles: Role[]
}

export type RoleName = 'USER' | 'ADMIN';

export interface Role {
    name: RoleName;
}

export interface Profile {
    id: string;
    username: string,
    email: string,
    profilePictureUrl?: string,
    level: string,
    levelProgress: number,
    streakDays: number,
    bestStreakDays: number,
    dailyGoal: number,
    wordsLearnedToday: number,
    testsPassed: number,
    avgTestScore: number,
    lastActive: Date,
    createdAt: Date,
    updatedAt: Date,
}

export type LoginRequest = LoginFormValues;
export type LoginResponse = AuthResponse;

export type RegisterRequest = RegistrationFormValues;
export type RegisterResponse = AuthResponse;

export type RefreshResponse = AuthResponse;
export type ProfileResponse = Profile;


