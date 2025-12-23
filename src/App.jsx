import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ExlxForm from './components/ExlxForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen">
      <Navbar />
      <ExlxForm />
    </div>
  )
}
export default App
