import React, { forwardRef } from "react"
import { cn } from "../lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>{};

const Container = forwardRef<HTMLDivElement, ContainerProps>(({className, ...props}, ref) => {
    return (
        <div 
            ref={ref} 
            className={cn(className, "mx-auto max-w-7xl p-4")}
            {...props}
        />
    )
})

export { Container };