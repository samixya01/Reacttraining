import React, { useState } from 'react'

function PageNotFound() {
    let a=10
    const changed=()=>{
        alert("fried")
        a=a+1
    }
    const[ b, setb]=useState(0)
  return (
    <div>
        {a}
        {console.log(a)}
        <button onClick={()=>changed()}>here</button>
        {b}
        <div onClick={()=>{
            
        
        }}> change b</div>
    
    </div>
  )
}

export default PageNotFound


