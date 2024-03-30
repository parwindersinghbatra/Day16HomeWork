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
    <div>{name}</div>
    <div>{age}</div>
    <div>
    <button
    disabled={isMemberAdded}
    className='employee_btn'
      onClick={() => {
        dispatch({ type: 'add_member_to_team', payload: id })
        setIsMemberAdded(true)
        }
      } 
      >
      Add
    </button>
    </div>
  </div>
  );
};

export default EmployeeCard;