import React from 'react'
import { useFormContext } from 'react-hook-form'

export const PasswordField = () => {
    const { register, formState: { errors } } = useFormContext()
    return (
        <div>
            <label>Password</label>
            <input type='password' {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
        </div>
    )
}
