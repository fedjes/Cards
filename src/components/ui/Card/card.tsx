import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './card.module.scss'

export const Card = forwardRef<ElementRef<'div'>, ComponentPropsWithRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    const classesCard = cn(s.root, className)

    return <div ref={ref} {...restProps} className={classesCard}></div>
  }
)

Card.displayName = 'Block'
