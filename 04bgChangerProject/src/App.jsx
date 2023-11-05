import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount(count + 1)
  }
  
  function decrementCount(){
    setCount(count - 1)
  }


  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <button onClick={decrementCount} className="bg-blue-500 text-white rounded px-5 py-5 text-xl m-5 hover:bg-blue-700 hover:border-blue-900 hover:text-white" >-</button>
      <p className="text-xl">{count}</p>
      <button onClick={incrementCount} className="bg-blue-500 text-white rounded px-5 py-5 text-xl  m-5 hover:bg-blue-700 hover:border-blue-900 hover:text-white" >+</button>
    </div>
  )
}

export default App  
