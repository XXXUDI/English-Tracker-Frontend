import {RouterProvider} from "react-router";
import {router} from "./providers/router";
import {Provider} from "react-redux";
import {store} from "./providers/store/config/store.ts";


export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}