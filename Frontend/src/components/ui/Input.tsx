import React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={
      "w-full border rounded px-3 py-2 h-10 focus:outline-none focus:ring-2 transition duration-300 " +
      className
    }
    {...props}
  />
));

Input.displayName = "Input";
