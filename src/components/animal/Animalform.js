import React, { useContext, useState, useEffect } from "react"
import { Customercontext } from "../customers/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const Animalform = (props) =>{
const{   customers,getCustomers} = useContext(Customercontext)
const { locations, getLocations } = useContext(LocationContext)
const {addAnimal,updateAnimal,getAnimals} = useContext(AnimalContext)

// Component state
const [animal, setAnimal] = useState({})

// const animal = useRef(null)
// const breed =  useRef(null)
// const location =useRef(null)
// const customer = useRef(null)

const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    console.log("********handleControlledInputChange Executes***********")
    console.log(event.target)
    console.log("current state variable animal", animal)

    const newAnimal = Object.assign({}, animal)
    console.log("new object that's a copy of animal state variable", newAnimal)
    
    newAnimal[event.target.name] = event.target.value
    console.log("newAnimal after modification", newAnimal)
    
    setAnimal(newAnimal)
  }

  // Get locations from API when component initializes
useEffect(() => {
    getLocations()
 }, [])


const constructNewAppt = () =>{
    const locationId =parseInt(animal.locationId)

if (locationId === 0 ) {
        window.alert("Please select a location ,customer and animal Name")
    } else {
        addAnimal({
            name: animal.name,
        breed: animal.breed,
        locationId: locationId,
        treatment: animal.treatment,
        customerId: parseInt(localStorage.getItem("kennel_customer"))
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
            <input type="text" id="animalName"  required autoFocus className="form-control" placeholder="Animal Name" 
            onChange={handleControlledInputChange}/>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="breedName">Breed Name: </label>
            <input type="text" id="breedName" required autoFocus className="form-control" placeholder="Breed Name"
            onChange={handleControlledInputChange} />
            </div>
        </fieldset>

        <fieldset>
             <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select defaultValue="" name="location" id="animalLocation" className="form-control" 
                onChange={handleControlledInputChange}>

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
                <select defaultValue="" name="customerId"  id="employeeAnimal" className="form-control" 
                onChange={handleControlledInputChange}>

                    <option value="0">Select an Customer</option>
                    {customers.map(e => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
        <div className="form-group">
          <label htmlFor="treatment">Treatments: </label>
          <textarea type="text" name="treatment" className="form-control"
            onChange={handleControlledInputChange}>
          </textarea>
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