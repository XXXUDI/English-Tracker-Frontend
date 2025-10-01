import {RouterProvider} from "react-router";
import {router} from "./providers/router";


export default function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}