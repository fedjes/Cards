import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Eye, EyeOff } from '@/assets'
import cn from 'classnames'
import clsx from 'clsx'

import s from './input.module.scss'

type inputProps = {
  disabled?: boolean
  error?: string
  placeholder: string
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
  const { className, disabled, error, onChange, placeholder, type = 'text', ...restProps } = props
  const classNames = {
    error: clsx(error ? s.error : ''),
    root: cn(error ? s.rootError : s.root, className),
  }

  const [showPassword, setShowPassword] = useState(false)
  const isShowPasswordButton = type === 'password'
  const setShowPasswordHandler = () => setShowPassword(prevValue => !prevValue)
  const getCurrentInputType = (type: inputProps['type'], showPassword: boolean) => {
    if (type === 'password' && showPassword) {
      return 'text'
    }

    return type
  }

  const currentInputType = getCurrentInputType(type, showPassword)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  return (
    <div className={s.position}>
      <label className={s.label}>{placeholder}</label>
      <input
        className={classNames.root}
        disabled={disabled}
        onChange={onChangeHandler}
        placeholder={placeholder}
        ref={ref}
        type={currentInputType}
        {...restProps}
      />

      {isShowPasswordButton &&
        (showPassword ? (
          <Eye onClick={setShowPasswordHandler} size={1.5} />
        ) : (
          <EyeOff onClick={setShowPasswordHandler} size={1.5} />
        ))}

      <p className={classNames.error}>{error}</p>
    </div>
  )
})
