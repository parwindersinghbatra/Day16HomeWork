import React from 'react'
import EmployeeCard from './EmployeeCard'

const Employees = ({data, dispatch}) => {
  return (
    <div>
        <h1>Employees</h1>
      {data.emplyees.map((emp)=><EmployeeCard dispatch={dispatch} key={emp.id} name={emp.name} age={emp.age}/>)}

      
      {/* <EmployeeCard /> */}
    </div>
  )
}

export default Employees
