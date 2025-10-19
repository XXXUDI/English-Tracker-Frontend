import type {PropsWithChildren} from "react";
import {setupReduxStore} from "../config/config.ts";
import type {State} from "../../../../../shared/config/store/state.ts";
import {Provider} from "react-redux";
import type {DeepPartial} from "react-hook-form";


interface StoreProviderProps {
    initialState?: DeepPartial<State>;
}

export const StoreProvider = ({
    children,
    initialState,
}: PropsWithChildren<StoreProviderProps>) => {
    const store = setupReduxStore(initialState as State);

    return <Provider store={store}>{children}</Provider>;
}