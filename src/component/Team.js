import React from 'react';
import TeamMembers from '../TeamMembers';
 // Assuming TeamMembers.js is renamed to TeamMember.js

 const Team = ({data, dispatch}) => {

  const {team} = data;

  return (
    <div  style={{border:"1px solid black", width:"60%"}}>
      <h1>Team</h1>
      {team.map((member) => <TeamMembers dispatch={dispatch} id={member.id} name={member.name} age={member.age} />)}
      <h2>Average Age : {data.team.reduce((acc, current)=>acc+=current.age, 0)/data.team.length}</h2>
    </div>
  );
};

export default Team;