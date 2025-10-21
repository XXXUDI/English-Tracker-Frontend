import * as React from "react";
import {cn} from "../../helpers/cn";
import styles from "./Progress.module.css";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number; // 0..100
}

function Progress({ className, value = 0, ...props }: ProgressProps) {
    const cl = cn(styles.root, className);
    const safeValue = Math.max(0, Math.min(100, value));
    const transform = { transform: `translateX(-${100 - safeValue}%)` };

    return (
        <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={safeValue}
            data-slot="progress"
            className={cl}
            {...props}
        >
            <div
                data-slot="progress-indicator"
                className={styles.indicator}
                style={transform}
            />
        </div>
    );
}

export { Progress };