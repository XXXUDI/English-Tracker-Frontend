import type {Profile} from "../../auth/model/types/auth.ts";

export interface ProfileState {
    isEmailSent: boolean,
    fullProfile: Profile | null,
}