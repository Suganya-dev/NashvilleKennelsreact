import React from "react"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customers/Customer.css"
import "./location/Location.css"
import "./animal/Animal.css"

import {LocationList} from "./location/LocationList.js"
import {LocationProvider} from "./location/LocationProvider.js"
import {AnimalProvider} from "./animal/AnimalProvider.js"
import{AnimalList} from "./animal/AnimalList.js"
import {Customer} from "./customers/Customer.js"
// import {Animal} from"./animal/Animal"
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

            <AnimalProvider />
            <AnimalList/>
            <AnimalProvider />
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
        <LocationProvider>
            < LocationList/>
            </LocationProvider>
            </article>
    </>
)