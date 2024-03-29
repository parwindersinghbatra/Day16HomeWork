import React from 'react'
import EmployeeCard from './EmployeeCard'

const Employees = ({data, dispatch}) => {
  return (
    <div>
        <h1>Employees</h1>
        {data.employees.map((emp) => <EmployeeCard dispatch={dispatch} id={emp.id} name={emp.name} age={emp.age} />)}
    </div>
  )
}

export default Employees
