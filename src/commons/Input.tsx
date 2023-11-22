"use client";
import React, { ChangeEvent, FocusEvent, useState } from "react";
import { EyeIcon, NotEyeIcon } from "./Icons";
import { ErrorMessage } from "hooks/useInput";

type InputProps = {
  placeholder: string;
  type?: string;
  className?: string;
  value?: string;
  error?: ErrorMessage;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};

export function Input({
  placeholder,
  type,
  className = "",
  value,
  error,
  onBlur,
  onFocus,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  const STYLE_INPUT = `w-full  px-0 pt-6  rounded-sm border-b border-darkGreen placeholder-darkGreen text-darkGreen   focus:outline-none bg-transparent placeholder-darkGreen::placeholder ${
    error ? "border-error" : ""
  } `;
  return (
    <div
      className={` flex  items-center   relative mx-1 font-roboto ${className}`}>
      <input
        value={value}
        type={inputType}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        defaultValue={value}
        className={STYLE_INPUT}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute  right-5 h-full mr-2"
          onClick={() => {
            setShowPassword(!showPassword);
          }}>
          {showPassword ? (
            <EyeIcon className="h-5 w-5 text-grey" />
          ) : (
            <NotEyeIcon className="h-5 w-5 text-grey" />
          )}
        </button>
      )}
      {error ? (
        <p className=" bg-[rgba(255,255,255,.5)] p-1 rounded-md  text-error text-xs  absolute right-0 top-[-3px] transition-all duration-150  ">
          {error}
        </p>
      ) : null}
    </div>
  );
}
