import React, { forwardRef } from "react";
import { cn } from "../lib/utils";

const Loading = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
    return (
        <div ref={ref}
            className={cn(className, "p-4 space-y-3")}
            {...props}
        >
            <div className="h-7 w-40 rounded bg-gray-200 animate-pulse" />
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
                        <div className="h-3 w-1/3 rounded bg-gray-200 animate-pulse" />
                    </div>
                </div>
            ))}
        </div>
    )
});

Loading.displayName = "Loading";

export { Loading };