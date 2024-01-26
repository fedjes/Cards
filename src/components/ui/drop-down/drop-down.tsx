import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropw-down.module.scss'

import dropDeleteIcon from './icon/dop-icon-delete.svg'
import dropEditIcon from './icon/dop-icon-edit.svg'
import dropPlayIcon from './icon/dop-icon-play.svg'
type DropProps = {} & ComponentPropsWithoutRef<typeof DropdownMenu.Content>
export const DropDown = forwardRef<ElementRef<typeof DropdownMenu.Content>, DropProps>(
  (props, ref) => {
    const { ...restProps } = props
    // const [bookmarksChecked, setBookmarksChecked] = useState(true)
    // const [urlsChecked, setUrlsChecked] = useState(false)
    // const [person, setPerson] = useState('pedro')

    return (
      <DropdownMenu.Root {...restProps}>
        <DropdownMenu.Trigger asChild>
          <button aria-label={'Customise options'} className={s.IconButton}>
            {'...'}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.DropdownMenuContent} ref={ref} sideOffset={5}>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <img alt={'edit'} src={dropPlayIcon} /> learn
            </DropdownMenu.Item>
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <img alt={'edit'} src={dropEditIcon} /> edit
            </DropdownMenu.Item>
            <DropdownMenu.Item className={s.DropdownMenuItem} disabled>
              <img alt={'edit'} src={dropDeleteIcon} /> edit delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
)
