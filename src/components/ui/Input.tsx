import * as React from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[50px] w-[310] rounded-md border border-input bg-background px-3 py-2 text-sm  outline-none	 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
