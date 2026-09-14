import { FormProvider, useForm, useWatch } from "react-hook-form";
import { DoctorSelect } from "../Select/DoctorSelect";
import { Button } from "../Button/Button";
import { EmailField } from "../Input/emailField";
import { PrioritySelect } from "../Select/PrioritySelect";
import { NameField } from "../Input/NameField";
import { VisitDate } from "../Date/visitDate";
import { TextAreaDescription } from "../TextArea/TextAreaDescription";
import { HeartPressureField } from "../Input/HeartPressureField";
import { HeartIllnessesField } from "../Input/HeartIllnessesField";
import { WeightField } from "../Input/WeightField";
import { AgeInput } from "../Input/AgeInput";
import { LastVisitDate } from "../Date/LastVisitDate";
import { fetchCreateCard } from "../../API/fetchCreateCard";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { VisitGoalField } from "../Input/VisitGoalField";
import { formatTime, formatTimeForInput } from "../../utills/utills";
import { fetchUpdateCard } from "../../API/fetchUpdateCard";
export const CardForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const card = useSelector((state) => {
    return state.cards.cards[id]
  })
  const { error } = useSelector((state) => {
    state.cards
    return state.cards
  })
  const formProps = useForm({
    defaultValues: {
      doctor: card?.doctor?.speciality || "",
      priority: card?.priority || "",
      visitDate: card?.visitDate ? formatTimeForInput(card?.visitDate) : "",
      fullName: card?.fullName || "",
      description: card?.description || "",
      age: card?.age || "0",
      lastVisitDate: card?.lastVisitDate ? formatTimeForInput(card?.lastVisitDate) : "",
      heartPressure: card?.heartPressure || "",
      visitGoal: card?.visitGoal || "",
      weight: card?.weight || "",
      heartillnesses: card?.heartillnesses || "",
    },
    mode: "onChange",
  });

  const { handleSubmit, control, watch } = formProps;
  const doctorSpeciality = watch("doctor"); // simpler и надёжнее для простого кейса

  const onSubmit = async (formData) => {
    let data = null
    formData = { ...formData, age: + formData.age, lastVisitDate: new Date(formData.lastVisitDate) || null, visitDate: new Date(formData.visitDate), weight: formData.weight || null }
    if (id) {
      data = await dispatch(fetchUpdateCard(formData, id))
    }
    else {
      data = await dispatch(fetchCreateCard(formData))
    }
    if (data) {
      navigate('/cards')
    }
  };

  return (
    <FormProvider {...formProps}>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <DoctorSelect />
        {doctorSpeciality &&
          <>
            <PrioritySelect />
            <NameField />
            <VisitDate />
            <VisitGoalField />
            <TextAreaDescription />
          </>
        }
        {doctorSpeciality === "cardiologist" &&

          <>
            <HeartPressureField />
            <HeartIllnessesField />
            <WeightField />
            <AgeInput />
          </>
        }
        {doctorSpeciality === "dentist" &&
          <>
            <LastVisitDate />
          </>}
        {doctorSpeciality === "therapist" &&
          <>
            <AgeInput />
          </>}

        <Button
          type="submit"
          text="Submit"
          className=""
        />
      </form>
    </FormProvider>
  );
};