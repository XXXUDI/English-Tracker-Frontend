import {baseApi} from "../api/baseApi";

export interface State {
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;

}