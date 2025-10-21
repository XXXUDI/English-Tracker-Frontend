import type {State} from "../../../shared/config/store/state.ts";

export const getProfileIsEmailSent = (state: State) => {
    return state.profile.isEmailSent;
}

export const getFullProfile = (state: State) => {
    return state.profile?.fullProfile;
}

export const getProfileId = (state: State) => {
    return state.profile.fullProfile?.id || '';
}



