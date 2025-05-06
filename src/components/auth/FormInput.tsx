import React from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function FormInput({
  label,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={props.name} className="mb-1 text-sm">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full border border-[#C9C0D4] rounded-lg px-4 py-2.5 focus:outline-none placeholder-[#1E1E2F] placeholder:text-sm ${className}`}
      />
    </div>
  );
}
