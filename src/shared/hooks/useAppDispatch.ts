import {setupReduxStore} from "../../app/providers/store/config";
import {useDispatch} from "react-redux";

export type AppDispatch = ReturnType<typeof setupReduxStore>['dispatch'];

export const useAppDispatch: () => AppDispatch = () => useDispatch();