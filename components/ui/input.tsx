import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-md border-b-2 border-white/70 bg-background px-3 py-2 text-lg  file:border-0 file:bg-background file:text-lg file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:border-white  disabled:cursor-not-allowed disabled:opacity-50 focus-visible:bg-background autofill:bg-background has-[autofill]:bg-transparent",
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
