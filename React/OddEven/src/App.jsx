
import React from 'react'

const App = () => {

  const number = 7  

  const result = number % 2 === 0 ? "Even Number" : "Odd Number"

  return (
    <div>
      <h1>Number: {number}</h1>
      <h2>{result}</h2>
    </div>
  )
}

export default App