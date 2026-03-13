import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import MyHoc from './GreetingWithBorders.jsx'

const person = {
  name: "sakshi",
  occupation: "teacher"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>HOC Demo</h1>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <h3>Plain Greeting:</h3>
        <Greeting person={person} />
      </div>
      <div style={{ flex: 1 }}>
        <h3>Greeting with HOC:</h3>
        <MyHoc person={person} />
      </div>
    </div>
  </StrictMode>,
)
