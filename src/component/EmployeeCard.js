import React from 'react'

const EmployeeCard = ({name, age, id, dispatch}) => {
  return (
    <div style={{backgroundColor:'grey', padding:'10px', margin:'10px', width:"10%"}}>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <button
        onClick={()=>{
            dispatch({type:'add_member_to_team', payload:id})

        }}

        >Add</button>
    </div>
  )
}

export default EmployeeCard
