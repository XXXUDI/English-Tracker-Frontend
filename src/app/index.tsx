import {createRoot} from "react-dom/client";
import {setupReduxStore, StoreProvider} from "./providers/store/config";
import {RouterProvider} from "react-router";
import {router} from "./providers/router";


import "../styles/normalize.css";
import "../styles/global.css"

const root = document.getElementById('root') as HTMLElement;

const container = createRoot(root);

const store = setupReduxStore();

container.render(
    <StoreProvider initialState={store.getState()}>
        <RouterProvider router={router}/>
    </StoreProvider>
);