import React from 'react'

const TeamMembers = ({name, age,id,  dispatch}) => {
  
  return (
    <div style={{backgroundColor:"green", margin:"10px 5px"}}>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <button
      onClick={() => dispatch({ type: 'remove_member_from_team', payload: id })}
      >Remove</button>
    </div>
  )
}

export default TeamMembers
