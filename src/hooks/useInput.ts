"use client";
import { ChangeEvent, useState } from "react";

interface UseInputProps {
  initialValue: string;
}

export default function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
