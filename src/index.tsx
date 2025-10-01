import {createRoot} from "react-dom/client";
import App from "./app/App.tsx";

import "./styles/normalize.css";
import "./styles/global.css";


const root = document.getElementById('root') as HTMLElement;

createRoot(root)
    .render(
        <App/>
    )