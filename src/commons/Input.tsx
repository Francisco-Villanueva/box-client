"use client";
import React, { ChangeEvent, useState } from "react";
import { EyeIcon, NotEyeIcon } from "./Icons";

type InputProps = {
  placeholder: string;
  type?: string;
  defaultValue?: string;
  className?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  placeholder,
  type,
  defaultValue = "",
  className = "",
  value,
  required,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div
      className={` flex  items-center  relative mt-1 font-roboto ${className}`}
    >
      <input
        value={value}
        type={inputType}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={value}
        className={`w-full  px-0   rounded-sm border-b border-darkGreen placeholder-darkGreen text-darkGreen   focus:outline-none bg-transparent placeholder-darkGreen::placeholder`}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute  right-5 h-full mr-2"
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
