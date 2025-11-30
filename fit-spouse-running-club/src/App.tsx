import { useState } from 'react'
import timPicture from './assets/PXL_20251018_165821482.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={timPicture} className="logo" alt="Tim Picture" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
