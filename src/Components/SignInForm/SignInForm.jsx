
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import signInSchema from '../../schema/signInSchema'
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailField } from '../Input/EmailField'
import { PasswordField } from '../Input/PasswordField'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchToken } from '../../API/fetchToken'
export const SignInForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formProps = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange",
        resolver: yupResolver(signInSchema)
    })

    const { handleSubmit } = formProps
    const onSubmit = async (formData) => {
        const token = await dispatch(fetchToken(formData, 'signin'))
        navigate("/cards")
    }

    return (
        <div>
            <FormProvider {...formProps}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <EmailField />
                    <PasswordField />
                    <Button type='submit' text='Log In' className='btn btn-login' />
                </form>
            </FormProvider>
        </div>
    )
}
