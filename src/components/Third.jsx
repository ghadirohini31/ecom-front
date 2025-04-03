import React from 'react'

const Child = ({name}) => {
  return (
    <div>
        <h2>Hello {name}</h2>
        </div>
  )
}

const Third = () => {
    return(
        <div>
            <Child name="Rohini"/>
        </div>
    )
}
export default Third