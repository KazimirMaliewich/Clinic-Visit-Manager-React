import React from "react";
import { useFormContext } from "react-hook-form";

export const LastVisitDate = ({
  name = "lastVisitDate",
  label = "Last visit date",
  className = "",
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="date" {...register(name)} />
    </div>
  );
};
