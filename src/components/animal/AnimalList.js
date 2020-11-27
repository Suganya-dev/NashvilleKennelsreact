import React, { useContext, useEffect } from "react"
import { AnimalContext} from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { Customercontext } from "../customers/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
const {animals, getAnimals} = useContext(AnimalContext);
const { customers, getCustomers } = useContext(Customercontext);
const { locations, getLocations } = useContext(LocationContext)

// like responding to CustomEvent

useEffect(() => {
    console.log("animalList: Initial render before data")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
},[]);

// which array we are rendering that has to come last in the promises.
    // .then(getAnimals)
    

return (
    <div className="animals">
      {
      animals.map((animal) => {
        const owner = customers.find((c) => c.id === animal.customerId);
        const clinic = locations.find((l) => l.id === animal.locationId);

        return (
          <Animal
            key={animal.id}
            location={clinic}
            customer={owner}
            animal={animal}
          />
        );
      })}
    </div>
  );
};





