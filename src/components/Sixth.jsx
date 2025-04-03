import React, { useState } from 'react'

const Sixth = () => {
    const [input,setInput] = useState("")
  return (
    <div>
        <input type="text"
        onChange={(event)=>setInput(event.target.value)} />
        <p>{input}</p>
    </div>
  )
}

export default Sixth