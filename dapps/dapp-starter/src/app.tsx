import { useState } from 'preact/hooks'
import './app.css'
import { Button } from 'shared-ui'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + Preact</h1>
      <div class="card bg-red-500">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <Button variant="tertiary">
        Button from substrate-dapp-ui package
      </Button>
    </>
  )
}
