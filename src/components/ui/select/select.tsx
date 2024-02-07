import { ComponentPropsWithoutRef } from 'react'

import { ArrowDown } from '@/assets/icons/ArrowDown'
// import { ArrowUp } from '@/assets/icons/ArrowUp'
import { SelectItem } from '@/components/ui/select/selectForward'
import { TypographyVariant } from '@/components/ui/typography/types'
import { Typography } from '@/components/ui/typography/typography'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

export const SelectComponent = ({
  defaultValue,
  onValueChange,
  value,
}: ComponentPropsWithoutRef<typeof Select.Root>) => {
  return (
    <div>
      <Select.Root defaultValue={defaultValue} onValueChange={onValueChange} value={value}>
        <Select.Trigger className={s.trigger}>
          <Select.Value placeholder={'select-box'} />
          <Select.Icon>
            <ArrowDown className={s.icon} size={1} />
            {/*<ArrowUp size={1} />*/}
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.SelectContent} position={'popper'}>
            <Select.Viewport className={'SelectViewport'}>
              <Select.Group>
                <SelectItem className={s.test} value={'select-box'}>
                  <Typography variant={TypographyVariant.Body1}>select-box</Typography>
                </SelectItem>
                <SelectItem className={s.test} value={'select-box1'}>
                  <Typography variant={TypographyVariant.Body1}>select-box1</Typography>
                </SelectItem>
                <SelectItem className={s.test} value={'select-box2'}>
                  <Typography variant={TypographyVariant.Body1}>select-box2</Typography>
                </SelectItem>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
