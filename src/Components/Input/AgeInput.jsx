
import { useFormContext } from "react-hook-form";

export const AgeInput = ({
  name = "age",
  label = "Age",
  className = ""
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register(name, { valueAsNumber: true })}
      />
    </div>
  );
};