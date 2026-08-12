import {object, string } from 'yup'


const signInSchema = object({


  email: string()
    .required('Вкажіть email')
    .email('Невірний формат email'),

  password: string()
    .required('Вкажіть пароль')
    .min(8, 'Пароль має містити щонайменше 8 символів'),
});

export default signInSchema;