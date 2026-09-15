
import { useFormContext } from "react-hook-form";

export const HeartIllnessesField = ({
  name = "heartillnesses",
  label = "Heart illnesses",
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