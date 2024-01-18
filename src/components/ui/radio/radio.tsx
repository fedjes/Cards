import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type RadioProps<T = string> = {
  ariaLabel?: string
  array: T[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>
export const RadioGroupComponent = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioProps>(
  (props, ref) => {
    const { ariaLabel = 'View density', array, ...restProps } = props
    const allRadio = array.map((el, index) => (
      <div key={el + index} style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={s.RadioGroupItem} id={`${index}`} value={el}>
          <RadioGroup.Indicator className={s.RadioGroupIndicator} />
        </RadioGroup.Item>
        <label className={s.Label} htmlFor={`${index}`}>
          {el}
        </label>
      </div>
    ))

    return (
      <div>
        <form>
          <RadioGroup.Root
            aria-label={ariaLabel}
            className={s.RadioGroupRoot}
            {...restProps}
            ref={ref}
          >
            {allRadio}
          </RadioGroup.Root>
        </form>
      </div>
    )
  }
)
