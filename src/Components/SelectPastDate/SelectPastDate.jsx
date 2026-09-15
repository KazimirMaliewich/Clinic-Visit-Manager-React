
import { useFormContext } from 'react-hook-form'
export const SelectPastDate = ({
    name = "status",
    label = "Status",
    className = ""

}) => {
    const {register} = useFormContext();

  return (
    <div className={className}>
        <label htmlFor={name}>{label}</label>
        <select id={name} {...register(name)}>
            <option value="">Select Past Date</option>
            <option value="finished">Past date</option>
            <option value="in progress">Not past date</option>
        </select>
    </div>
  )
}
