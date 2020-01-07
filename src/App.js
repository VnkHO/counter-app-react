import React, { useState } from 'react'
import Button from './components/Button'

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  return (
    <div className="App">
      <h1>Counter app</h1>
      <p>{count}</p>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
    </div>
  );
}

export default App;
