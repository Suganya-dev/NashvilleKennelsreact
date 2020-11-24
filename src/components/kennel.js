import React from "react"
import { Route } from "react-router-dom"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customers/Customer.css"
import "./location/Location.css"
import "./animal/Animal.css"
import "./customers/Customer.css"
import "./employee/Employee.css"

import {LocationList} from "./location/LocationList"
import {LocationProvider} from "./location/LocationProvider"
import {AnimalProvider} from "./animal/AnimalProvider"
import{AnimalList} from "./animal/AnimalList"
import{CustomerProvider} from "./customers/CustomerProvider"
import{CustomerList} from "./customers/CustomerList"
import{EmployeeProvider} from "./employee/EmployeeProvider"
import {EmployeeList} from"./employee/EmployeeList"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>
//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>
//         <h2>Animals</h2>
//         <article className="animals">

//             <AnimalProvider >
//             <AnimalList/>
//             </AnimalProvider >
//              </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeProvider >
//             <EmployeeList />
//             </EmployeeProvider >
//         </article>
//         <h2>Customers</h2>
//         <article className="customers">
//             < CustomerProvider>
//             <CustomerList/>
//             </ CustomerProvider>
            
//         </article>
//         <h2>Location</h2>
//         <article className="locations">
//         <LocationProvider>
//             < LocationList/>
//             </LocationProvider>
//             </article>
//     </>
// )