import React from 'react';
import TeamMembers from '../TeamMembers';
 // Assuming TeamMembers.js is renamed to TeamMember.js

 const Team = ({data, dispatch}) => {

  const {team} = data;

  return (
    <div style={{border:"1px solid black", width:"60%"}}>
      <div>
      <h2 style={{color:'white', backgroundColor:'green', textAlign:'center', margin:'0px'}}>Team</h2>
      {team.map((member) => <TeamMembers dispatch={dispatch} id={member.id} name={member.name} age={member.age} />)}
      </div>
      <div>
      <h5>Average Age : {data.team.reduce((acc, current)=>acc+=current.age, 0)/data.team.length}</h5>
      </div>
    </div>
  );
};

export default Team;