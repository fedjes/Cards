import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/components/ui/typography/types'
import cn from 'classnames'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'p', className, variant = TypographyVariant.H1, ...rest } = props
  const classes = cn(s[variant], className)

  return <Component className={classes} {...rest} />
}
