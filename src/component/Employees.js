import React from 'react'
import EmployeeCard from './EmployeeCard'

const Employees = ({data, dispatch}) => {
  return (
    <div style={{border:"1px solid black",margin:"0px 10px", width:"60%"}}>
        <h1>Employees</h1>
        {data.employees.map((emp) => <EmployeeCard dispatch={dispatch} id={emp.id} name={emp.name} age={emp.age} />)}
    </div>
  )
}

export default Employees
