import * as React from "react";
import styles from "./Input.module.css";
import {cn} from "../../helpers/cn";


function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(styles.input, className)}
            {...props}
        />
    );
}

export { Input };
