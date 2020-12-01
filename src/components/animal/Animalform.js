import React, { useContext, useRef, useEffect } from "react"
import { Customercontext } from "../customers/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const Animalform = (props) =>{
const{   customers,getCustomers} = useContext(Customercontext)
const { locations, getLocations } = useContext(LocationContext)
const {addAnimal} = useContext(AnimalContext)

/*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.js    
    */
const animal = useRef(null)
const location =useRef(null)
const customer = useRef(null)

useEffect(() => {
    getCustomers().then(getLocations)
 }, [])


const constructNewAppt = () =>{
    const locationId = parseInt(location.current.value)
    const customerId = parseInt(customer.current.value)
    const animalName = animal.current.value

    if (locationId === 0 || customerId===0 || animalName==="" ) {
        window.alert("Please select a location ,customer and animal Name")
    } else {
        addAnimal({
            name: animalName,
            locationId,
            customerId
        })
        .then(() => props.history.push("/animals"))
    }
}

return (
    <form className="animalform">
        <h2 className="animalform__title">Make Appointment</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="animalName">Animal Name: </label>
                <input type="text" id="animalName" ref={animal} required autoFocus className="form-control" placeholder="Animal Name" />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Caretaker for: </label>
                    <select defaultValue="" name="animal" ref={customer} id="employeeAnimal" className="form-control" >
                        <option value="0">Select an Customer</option>
                        {customers.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
        
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAppt()
                }}
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )

}