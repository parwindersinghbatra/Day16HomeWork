import React from 'react'
import './component/TeamMember.css'

const TeamMembers = ({name, age,id,  dispatch}) => {
  
  return (
    <div className='Team_main'>
      <div>{name}</div>
      <div>{age}</div>
      <div>
      <button
      onClick={() => dispatch({ type: 'remove_member_from_team', payload: id })}
      >Remove</button>
      </div>
    </div>
  )
}

export default TeamMembers
