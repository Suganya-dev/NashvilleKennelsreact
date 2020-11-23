import React from "react"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customers/Customer.css"
import "./location/Location.css"
import {Location} from "./location/Location.js"
import {Customer} from "./customers/Customer.js"
import {Animal} from"./animal/Animal"
import {Employee} from "./employee/Employee.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            < Customer/>
            < Customer/>
            <Customer/>
            <Customer/>
        </article>
        <h2>Location</h2>
        <article className="locations">
            < Location/>
            < Location/>
            </article>
    </>
)