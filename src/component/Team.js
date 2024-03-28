import React from 'react'
import TeamMembers from '../TeamMembers';

const Team = ({data}) => {

// const {team} = data;
  return (
    <div>
      <h1>Team</h1>
      {
      data.team.map((item) =>
        <TeamMembers key={item.id} name={item.name} age={item.age}/>)}
    </div>
  )
}

export default Team
