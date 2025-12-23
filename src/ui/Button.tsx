import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        primary: "rounded-lg bg-black text-white",
        underline: `relative inline-block
          before:content-[''] before:absolute before:left-0 before:-bottom-1
          before:h-0.5 before:w-full before:bg-white
          before:opacity-0 before:scale-x-0 before:origin-left
          before:transition before:duration-500
          hover:before:opacity-100 hover:before:scale-x-100`,
        underlined: `relative inline-block
          before:content-[''] before:absolute before:left-0 before:-bottom-1
          before:h-0.5 before:w-full before:bg-white`,
      },
      size: {
        default: "",
        lg: "px-4 py-3"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, size, variant, ...props}, ref) => {
  return <button ref={ref} className={cn(buttonVariants({variant, size}), className)} {...props} />
})
export { Button, buttonVariants };