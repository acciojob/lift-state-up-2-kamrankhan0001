
import React, { useState } from "react";
import './../styles/App.css';



  const Parent = () =>{

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e)=>{
      setInputValue(e.target.value);
    }

    return(
      <div className="parent">
       <Child inputValue={inputValue} handleInputChange={handleInputChange}/>
       <p>{inputValue}</p>
         
      </div>
    )
    }

    const Child = ({inputValue, handleInputChange})=>{
      return (
        <div className="child">
            {/* Do not remove the main div */}
            <h1>Parent Component</h1>
            <h2>Child Component</h2>
            <input type="text" placeholder="Write Something Here" onChange={handleInputChange}/>
        </div>
      )
    }

    export default Parent;
    
    

  
  



