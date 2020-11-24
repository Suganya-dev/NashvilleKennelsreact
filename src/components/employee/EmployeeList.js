import React, { useContext, useEffect } from "react"
import { EmployeeContext} from "./EmployeeProvider.js"
import { Employee } from "./Employee.js"
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext);

    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getEmployees()
    });

    return (
        <div className="employees">
        {
            employees.map(emp => <Employee key={emp.id} place={emp} />)
        }
        </div>
    )
    }