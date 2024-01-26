import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'

import s from './sign-in-form.module.scss'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}
export const SignInForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  console.log(errors.email?.message)
  console.log(errors.password?.message)
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  return (
    <div className={s.root}>
      <h2>Sign In</h2>
      <form className={s.formRoot} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={'email'}>Email</label>
        <input
          id={'email'}
          {...register('email', {
            pattern: { message: 'Invalid email', value: emailRegex },
            required: 'Email is required',
          })}
        />

        <label htmlFor={'password'}>Password</label>
        <input
          id={'password'}
          type={'password'}
          {...register('password', {
            minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
            required: 'Password is required',
          })}
        />
        <div className={s.rememberMe}>
          <input
            id={'rememberMe'}
            type={'checkbox'}
            {...register('rememberMe', {
              required: 'ChekBox is required',
            })}
          />
          <label htmlFor={'rememberMe'}>Remember me</label>
        </div>
        <div className={s.form_right_side}>
          <p>Forgot Password?</p>
        </div>
        <div className={s.buttonGroup}>
          <Button type={'submit'} variant={'primary'}>
            Sign in
          </Button>
          <p>Dont have an account?</p>
          <Button variant={'link'}>Sign up</Button>
        </div>
      </form>
    </div>
  )
}
