import * as React from "react";
import {cn} from "../../helpers/cn";
import styles from "./Separator.module.css";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
}

function Separator({
                       className,
                       orientation = "horizontal",
                       decorative = true,
                       ...props
                   }: SeparatorProps) {
    const isHorizontal = orientation === 'horizontal';

    return (
        <div
            role={decorative ? 'separator' : undefined}
            aria-orientation={orientation}
            aria-hidden={decorative}
            data-slot="separator-root"
            className={cn(
                styles.root,
                isHorizontal ? styles.horizontal : styles.vertical,
                className,
            )}
            {...props}
        />
    );
}

export { Separator };