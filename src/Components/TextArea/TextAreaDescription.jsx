import React from "react";
import { useFormContext } from "react-hook-form";

export const TextAreaDescription = ({
  name = "description",
  label = "Description",
  placeholder = "",
  rows = 4,
  className = ""
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};