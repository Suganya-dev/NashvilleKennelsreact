import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import {EmployeeProvider} from "./employee/EmployeeProvider"
import {CustomerProvider} from "./customers/CustomerProvider"
import {CustomerList} from "./customers/CustomerList"
import {EmployeeList} from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = (props) => {

 return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
            <LocationProvider>
            <CustomerProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
                </CustomerProvider>
                 </LocationProvider> 
            </AnimalProvider>

            <EmployeeProvider >
            <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
                } />
                <Route exact path="/employees/create" render={
                props => <EmployeeForm {...props} />
                 } />
           </EmployeeProvider >


             < CustomerProvider>
             <Route path="/customers">
            <CustomerList/>
                </Route>    
             </ CustomerProvider>
        </>
    )
}