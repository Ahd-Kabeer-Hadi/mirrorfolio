import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-w[80px]  min-h-40 w-full rounded-md border-b-2 border-white/70 bg-background px-3 py-2 text-lg  file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:border-white  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        rows={10}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
