import type {RootState} from "../../app/providers/store/config/config/config.ts";
import {type TypedUseSelectorHook, useSelector} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
