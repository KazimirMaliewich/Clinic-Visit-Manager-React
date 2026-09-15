
import { useFormContext } from "react-hook-form";

export const NameField = ({
  name = "fullName",
  label = "Full name",
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
