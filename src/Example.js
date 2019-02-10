import React, { useState, useEffect } from "react"

//function Example() {
const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('useEffect() is called.');
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <h1>You clicked <div data-testid='result'>{count}</div> times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
