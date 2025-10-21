import {createRoot} from "react-dom/client";
import {setupReduxStore, StoreProvider} from "./providers/store/config";
import {RouterProvider} from "react-router";
import {router} from "./providers/router";


import "../styles/normalize.css";
import "../styles/global.css"
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = document.getElementById('root') as HTMLElement;

const container = createRoot(root);

const store = setupReduxStore();

const GOOGLE_OAUTH_CLIENT_ID = (import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string) || '';


container.render(
    // Maybe better to move GoogleOAuthProvider inside StoreProvider?
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
        <StoreProvider initialState={store.getState()}>
            <RouterProvider router={router} />
        </StoreProvider>
    </GoogleOAuthProvider>
);