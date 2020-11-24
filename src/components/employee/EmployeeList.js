import React, { useContext, useEffect } from "react"
import { EmployeeContext,EmployeeProvider} from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = () => {

    const {employees, getEmployees} = useContext(EmployeeContext);

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    },[])

    // useEffect(() => {
    //     // console.log("LocationList: Location state changed");
    //     // console.log(employees);
    //   }, [employees]);
    

      
    return (
        <div className="employees">
        {
            employees.map(emp => <Employee key={emp.id} employee={emp} />)
        }
        </div>
    )
    }