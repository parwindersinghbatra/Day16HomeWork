import React from 'react'

const TeamMembers = ({name, age}) => {
  return (
    <div style={{backgroundColor:"green", margin:"10px 5px"}}>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <button>Remove</button>
    </div>
  )
}

export default TeamMembers
