import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { TabsContent, TabsTrigger } from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>
export const TabsComponent = forwardRef<ElementRef<typeof Tabs.Root>, TabsProps>((props, ref) => {
  const { tabs, ...restProps } = props

  const mapedTabs = tabs.map(el => {
    return (
      <Tabs.List className={s.TabsList} key={el.title}>
        <TabsTrigger className={s.default} disabled={el.disabled} value={el.title}>
          {el.value}
        </TabsTrigger>
        <TabsContent value={el.title}>{el.value}</TabsContent>
      </Tabs.List>
    )
  })

  return (
    <Tabs.Root {...restProps} className={s.TabsRoot} ref={ref}>
      {mapedTabs}
    </Tabs.Root>
  )
})
