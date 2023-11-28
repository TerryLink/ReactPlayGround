import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // 使用useState Hook
    return (
      <div>
        <p>Click {count} times</p>
        {count < 30 && <button onClick={()=>setCount(count + 1)}>
          Click me!
        </button>}
        
      </div>
    );
  }

export default Counter