
import React, { useState } from "react";
import './../styles/App.css';



  const Parent = () =>{

    const [inputValue, setinputvalue] = useState("");

    
    return (
      <div>
          {/* Do not remove the main div */}
          <h1>Parent Component</h1>
          <h2>Child Component</h2>
          <input type="text" placeholder="Write Something Here" onChange={(e) => setinputvalue(e.target.value)}/>
          <p>{inputValue}</p>
      </div>
    )

  }
  



