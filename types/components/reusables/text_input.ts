import React from "react";

export interface TextInputProps {
  required: boolean;
  id: string;
  value: string;
  label: string;
  changeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}