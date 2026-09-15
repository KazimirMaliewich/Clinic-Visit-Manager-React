
import { useFormContext } from "react-hook-form";

export const PrioritySelect = ({
  name = "priority",
  label = "Priority",
  className = ""
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        <option value="">Select priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};