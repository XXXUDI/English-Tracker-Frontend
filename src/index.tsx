import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";

const root = document.getElementById('root') as HTMLDocument;

createRoot(root)
    .render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )