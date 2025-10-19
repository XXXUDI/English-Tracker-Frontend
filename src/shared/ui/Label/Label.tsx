"use client";

import * as React from "react";
import styles from "./Label.module.css";
import { cn } from "../../helpers/cn";

function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label
            data-slot="label"
            className={cn(styles.label, className)}
            {...props}
        />
    );
}

export { Label };
