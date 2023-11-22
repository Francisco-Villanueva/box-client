"use client";
import { ChangeEvent, useState } from "react";
export type InputValidatorType =
  | "required"
  | "password"
  | "email"
  | "no required";

export const ERROR_MESSAGES = {
  noRequired: null,
  required: "This field is required",
  email: "Enter a valid email address.",
  passwordLength: "Must be at least 6 characters long.",
  passwordRegex:
    "Must contain at least one uppercase letter, one lowercase letter, and one number.",
};

export type ErrorType = keyof typeof ERROR_MESSAGES;
export type ErrorMessage = (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES];

function validator(type: InputValidatorType) {
  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex)) {
      return ERROR_MESSAGES.email;
    }
    return null;
  };

  const passwordValidator = (value: string) => {
    if (value.length < 6) {
      return ERROR_MESSAGES.passwordLength;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!regex.test(value)) {
      return ERROR_MESSAGES.passwordRegex;
    }

    return null;
  };

  const requiredField = (value: string) => {
    if (value.length < 1) {
      return ERROR_MESSAGES.required;
    }
    return null;
  };

  switch (type) {
    case "required": {
      return requiredField;
    }
    case "password": {
      return passwordValidator;
    }
    case "email": {
      return emailValidator;
    }
    case "no required":
      return ERROR_MESSAGES.noRequired;
  }
}

interface UseInputProps<T> {
  value: T;
  error: ErrorMessage;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
  onBlur: () => void;
  onFocus: () => void;
}

export default function useInput<T>(
  initialValue: T,
  validationType: InputValidatorType
): UseInputProps<T> {
  const validateFunction = validator(validationType);
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ErrorMessage>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  const clearInput = () => {
    setValue(initialValue);
  };

  const onBlur = () => {
    if (validateFunction) {
      setError(validateFunction(value as string));
    }
  };
  const onFocus = () => {
    setError(null);
  };
  return {
    value,
    onChange,
    error,
    clearInput,
    onBlur,
    onFocus,
  };
}
