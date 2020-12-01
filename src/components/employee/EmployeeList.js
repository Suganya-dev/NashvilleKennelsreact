import React, { useContext, useEffect } from "react"
import { EmployeeContext} from "./EmployeeProvider"
import { Link } from "react-router-dom"
import { Employee } from "./Employee"
import "./Employee.css"


export const EmployeeList = (props) => {

    const {employees, getEmployees} = useContext(EmployeeContext);

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    },[])

   return (
        <div className="employees">
             <h1>Employees</h1>
        <button onClick={() => props.history.push("/employees/create")}>
            Add Employee
        </button>
        <article className="employeeList"> 
        {/* each employee has a unique identifier as id */}
        {
            employees.map(employee => {
                return <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
        })
        }
        </article>
        </div>
    )
    }

    // employees.map(emp => <Employee key={emp.id} employee={emp} />)