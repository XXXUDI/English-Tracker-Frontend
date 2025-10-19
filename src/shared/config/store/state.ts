import {baseApi} from "../api/baseApi.ts";

export interface State {
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;

}