import { useState } from 'react'

function TestSwitch() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <div className="switch">
      <input type="checkbox"/>
    
      <label></label>
  </div> 
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
      </div>
      </>
    )
  }
  
  export default TestSwitch