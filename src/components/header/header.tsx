import { Button } from '@/components/ui/button'

import s from './header.module.scss'
export const Header = () => {
  return (
    <div className={s.root}>
      <div>ит-инкубатор</div>
      <Button className={'secondary'}>Sign In</Button>
    </div>
  )
}
