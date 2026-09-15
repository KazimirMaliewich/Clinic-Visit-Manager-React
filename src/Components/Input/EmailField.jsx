
import { useFormContext } from 'react-hook-form'

export const EmailField = () => {
  const { register, formState: {errors} } = useFormContext()  
    return (
    <div>
        <label>Email</label>
        <input type='email' {...register('email')}/>
        {errors.email && <p>{errors.email.message}</p>}
        </div>
  )
}
