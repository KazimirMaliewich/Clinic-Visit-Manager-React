
import { useFormContext } from "react-hook-form";

export const VisitGoalField = ({
  name = "visitGoal",
  label = "Visit goal",
  placeholder = "",
  className = ""
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