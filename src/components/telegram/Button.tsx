import { ButtonHTMLAttributes, Children } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" ;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
    return (
      <button
        className={clsx(
          'rounded-xl px-6 py-3 font-semibold transition duration-200',
          variant === 'primary'
            ? 'bg-[#845EF7] text-white hover:bg-[#6f4fe0]'
            : 'bg-white text-[#845EF7] border border-[#845EF7] hover:bg-gray-100',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  };