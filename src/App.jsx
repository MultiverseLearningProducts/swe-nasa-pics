import { useState } from 'react'
// components
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import DisplayPanel from './components/DisplayPanel'

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)
  return (
    <>
      <Header />
      <main>
        <ControlPanel
          date={date}
          setDate={setDate}
          size={size}
          setSize={setSize}
        />
        <DisplayPanel date={date} size={size} />
      </main>
    </>
  )
}

export default App
