import React, { useContext, useEffect } from "react"
import { AnimalContext} from "./AnimalProvider.js"
import { Animal } from "./Animal.js"
import "./Animal.css"

export const AnimalList = () => {
const {animals, getAnimals} = useContext(AnimalContext);

// like responding to CustomEvent

useEffect(() => {
    console.log("LocationList: Initial render before data")
    getAnimals()
});

return (
    <div className="animals">
    {
        animals.map(anim => <Animal key={anim.id} Breed={anim} />)
    }
    </div>
)
}