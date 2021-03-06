import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import {EmployeeProvider} from "./employee/EmployeeProvider"
import {CustomerProvider} from "./customers/CustomerProvider"
import {CustomerList} from "./customers/CustomerList"
import {EmployeeList} from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import {LocationDetail} from "./location/Locationdetail"
import { AnimalList } from "./animal/AnimalList"
import {EmployeeForm} from "./employee/Employeeform"
import {EmployeeDetail} from "./employee/EmployeeDetail"
import {Animalform} from "./animal/Animalform"

export const ApplicationViews = (props) => {

 return (
        <>
            <LocationProvider>
            <EmployeeProvider> 
            <AnimalProvider> 
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
                <Route path="/locations/:locationId(\d+)" render={
                props => <LocationDetail {...props} />
                    } />
            </AnimalProvider> 
            </EmployeeProvider>
            </LocationProvider>

            <AnimalProvider>
            <LocationProvider>
            <CustomerProvider>

            <Route exact path="/animals" render={
            props => <AnimalList {...props} />
                } />
           
            <Route exact path="/animals/create" render={
            props => <Animalform {...props} />
                } />
              </CustomerProvider>
                 </LocationProvider> 
            </AnimalProvider>

            
            <AnimalProvider>
            <EmployeeProvider >
            <LocationProvider>
            <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
                } />
                <Route exact path="/employees/create" render={
                props => <EmployeeForm {...props} /> } />

            {/* New route for showing emploee details */}
                <Route path="/employees/:employeeId(\d+)" render={
                    props => <EmployeeDetail {...props} />
                 } />
            </LocationProvider>
           </EmployeeProvider >
           </AnimalProvider>


             < CustomerProvider>
             <Route path="/customers">
            <CustomerList/>
                </Route>    
             </ CustomerProvider>
        </>
    )
}