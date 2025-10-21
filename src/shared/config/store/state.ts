import {baseApi} from "../api/baseApi";
import type {ProfileState} from "../../../entities/profile/type/profile.ts";

export interface State {
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
    profile: ProfileState;
}