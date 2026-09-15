
import { useFormContext } from "react-hook-form";

export const VisitDate = ({
  name = "visitDate",
  label = "Visit date",
  className = ""
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="date" {...register(name)} />
    </div>
  );
};