import { memo, useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

const useForceUpdate = () => {
  const [, setState] = useState(0)
  return () => setState((prev) => prev + 1)
}

function App() {
  const forceUpdate = useForceUpdate()
  return (
   <div style={{ margin: '20px', padding: '20px', border: '2px solid blue' }}>
    <button onClick={forceUpdate}>Render</button>
    <Parent />
    <RenderCount />
   </div>
  )
}

function Parent() {
  const [value, setValue] = useState('')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid green' }}>
      Input value is: {value}
      <Child handleChange={handleChange} />
      <RenderCount />
    </div>
  )
}

const Child = ({ handleChange }:{handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid red' }}>
      <input type="text" onChange={handleChange} />
      <RenderCount />
    </div>
  )
}


function RenderCount() {
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div style={{ marginTop: '10px' }}>Render count: {renderCount.current}</div>
  )
}

export default App
