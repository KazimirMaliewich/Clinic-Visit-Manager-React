import { useFormContext } from "react-hook-form";

export const DoctorSelect = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="doctor">Doctor</label>

      <select
        id="doctor"
        {...register("doctor", {
          onChange: (e) => console.log("DoctorSelect onChange:", e.target.value),
        })}
      >
        

        <option value="cardiologist">
          Cardiologist
        </option>

        <option value="dentist">
          Dentist
        </option>

        <option value="therapist">
          Therapist
        </option>
      </select>
    </div>
  );
};