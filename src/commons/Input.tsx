"use client";
import React, { useState } from "react";
import { EyeIcon, NotEyeIcon } from "./Icons";

type InputProps = {
  placeholder: string;
  type?: string;
  defaultValue?: string;
  className?: string;
  value?: string;
  required?: boolean;
};

export default function Input({
  placeholder,
  type,
  defaultValue = "",
  className = "",
  value,
  required,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div className={`relative h-16 font-roboto ${className}`}>
      <input
        value={value}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        className={`w-full h-14 py-2 rounded-none border-b border-darkGreen placeholder-darkGreen text-darkGreen p-4 focus:outline-none bg-transparent placeholder-darkGreen::placeholder`}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute pb-3 right-5 h-full mr-2"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeIcon className="h-5 w-5 text-grey" />
          ) : (
            <NotEyeIcon className="h-5 w-5 text-grey" />
          )}
        </button>
      )}
    </div>
  );
}
