import styles from "./Tabs.module.css";
import React, {useState, createContext, useContext} from "react";
import {cn} from "../../helpers/cn";

// Context для хранения состояния активного таба
// TODO: replace by Redux
const TabsContext = createContext({
    value: "",
    setValue: (v: string) => {
    },
});

export function Tabs({value, onValueChange, defaultValue, className, children, ...props}: {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    className?: string;
    children: React.ReactNode;
}) {
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const currentValue = value !== undefined ? value : internalValue;
    const setValue = (v: string) => {
        if (onValueChange) onValueChange(v);
        setInternalValue(v);
    };
    return (
        <TabsContext.Provider value={{value: currentValue, setValue}}>
            <div className={cn(styles.tabs, className)} {...props}>{children}</div>
        </TabsContext.Provider>
    );
}

export function TabsList({className, children, ...props}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={cn(styles.tabsList, className)} {...props}>{children}</div>
    );
}

export function TabsTrigger({value, disabled, className, children, ...props}: {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}) {
    const {value: activeValue, setValue} = useContext(TabsContext);
    return (
        <button
            type="button"
            className={cn(
                styles.tabsTrigger,
                activeValue === value ? styles["tabsTrigger_active"] : undefined,
                className
            )}
            data-state={activeValue === value ? "active" : undefined}
            disabled={disabled}
            onClick={() => !disabled && setValue(value)}
            {...props}
        >
            {children}
        </button>
    );
}

export function TabsContent({value, className, children, ...props}: {
    value: string;
    className?: string;
    children: React.ReactNode;
}) {
    const {value: activeValue} = useContext(TabsContext);
    if (activeValue !== value) return null;
    return (
        <div className={cn(styles.tabsContent, className)} {...props}>{children}</div>
    );
}
