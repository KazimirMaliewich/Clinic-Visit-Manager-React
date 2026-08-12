import { FormProvider, useForm, useWatch } from "react-hook-form";
import { DoctorSelect } from "../Select/DoctorSelect";
import { Button } from "../Button/Button";

export const CardForm = () => {
  const formProps = useForm({
    defaultValues: {
      doctor: "",
      priority: "",
      visitDate: "",
      fullName: "",
      description: "",
      age: "",
      lastVisitDate: "",
      heartPressure: "",
      visitGoal: "",
      weight: "",
      heartillnesses: "",
    },
    mode: "onChange",
  });

  const { handleSubmit, control, watch } = formProps;
  const doctorSpeciality = watch("doctor"); // simpler и надёжнее для простого кейса

  console.log("Выбранный врач:", doctorSpeciality);

  const onSubmit = (formData) => {
    console.log("Данные формы:", formData);
  };

  return (
    <FormProvider {...formProps}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DoctorSelect />

        <Button
          type="submit"
          text="Submit"
          className=""
        />
      </form>
    </FormProvider>
  );
};