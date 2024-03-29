import React from 'react';
import { useState } from "react";
import'./../component/EmployeeCard.css'

const EmployeeCard = ({ name, age, id, dispatch}) => {

  const [isMemberAdded, setIsMemberAdded] = useState(false);

  const handleMemberRemoved = () => {
    setIsMemberAdded(false); 
  };

  return (
    <div className='main_div'>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  
    <button
    disabled={isMemberAdded}
      onClick={() => {
        dispatch({ type: 'add_member_to_team', payload: id })
        setIsMemberAdded(true)
        }
      } 
      >
      Add to Team
    </button>
  </div>
  );
};

export default EmployeeCard;