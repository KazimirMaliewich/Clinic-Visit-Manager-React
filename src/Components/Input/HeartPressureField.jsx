import React from "react";
import { useFormContext } from "react-hook-form";

export const HeartPressureField = ({
  name = "heartPressure",
  label = "Heart pressure",
  className = "",
  placeholder = "",
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};