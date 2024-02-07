import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'

type SelectItemProps = ComponentPropsWithoutRef<typeof Select.Item>
export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Select.Item className={className} {...props} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={'SelectItemIndicator'}></Select.ItemIndicator>
      </Select.Item>
    )
  }
)
