import React, { useState, useEffect, useContext } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

// importing datas using usecontext
export const EmployeeDetail = (props) => {
    const { animal, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)
// using statevariable for state change

    const [animals, setAnimals] = useState({})
    const [employee, setEmployees] = useState({})
    const [location, setLocations] = useState({})
    
// rendering function using useeffect
    useEffect(() => {
        getEmployees()
            .then(getAnimals)
            .then(getLocations)
    }, [])

    useEffect(() => {
        const animals = animal.find(a => a.id === employee.animalId) || {}
        setAnimals(animals)
    }, [animal])
// dynamic routing takes place
    useEffect(() => {
        const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployees(employee)
    }, [employees])

    useEffect(() => {
        const location = locations.find(l => l.id === employee.locationId) || {}
        setLocations(location)
    }, [locations])
// rendering and returning to the DOM
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div>Currently working at { location.name }</div>
            <div>
                {
                (employee.animalId === null)
                    ? "Not assigned to an animal"
                    : `Currently taking care of ${animals.name}`
                }
            </div>
        </section>
    )
}
