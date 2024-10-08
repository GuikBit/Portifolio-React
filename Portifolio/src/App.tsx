import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumberTicker from './components/ui/number-ticker'
import { BorderBeam } from './components/ui/border-beam'

function App() {
  const [count, setCount] = useState(0.1)

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card bg-white">
        

        <div className="relative h-auto w-auto rounded-lg">
          <BorderBeam  />
          <button className='whitespace-pre-wrap text-8xl font-medium bg-white dark:bg-black tracking-tighter text-white ' onClick={() => setCount((count) => count + 1)}>
          <NumberTicker value={count}/>
        </button>
        </div>

        

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
