import { useState } from 'react'
import './index.css'
import NumArrary from './components/NumArrary'
import Student from './components/Student'
import NumTable from './components/NumTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>This is React Practice Feb 27</h1>
      <NumArrary />
      <Student />
      <NumTable />
    </div>
  )
}

export default App
