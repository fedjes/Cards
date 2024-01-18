// import { Card } from '@/components/ui/Card/card'
// import { RadioS } from '@/components/ui/radio/radio'

import { Tabs, TabsComponent } from '@/components/ui/tabs'

export function App() {
  // const data = [
  //   { id: 'r1', value: 'default' },
  //   { id: 'r2', value: 'comfortable' },
  //   { id: 'r3', value: 'compact' },
  //   { id: 'r4', value: 'four' },
  // ]
  const testSwitcher = [
    { disabled: false, title: 'testTitle', value: 'Switcher' },
    { disabled: true, title: 'testTitle1', value: 'Switcher' },
    { disabled: false, title: 'testTitle2', value: 'Switcher' },
  ]

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        // flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      {/*<Card>*/}
      {/*  <Inp />*/}
      {/*  <Inp />*/}
      {/*  <Btn />*/}
      {/*</Card>*/}
      {/*<RadioS data={data}></RadioS>*/}
      <TabsComponent tabs={testSwitcher} />
    </div>
  )
}

// const Inp = () => {
//   return <input style={{ width: '100%' }} />
// }
//
// const Btn = () => {
//   return <button>click me</button>
// }
