import React, { useState} from "react"
import "./Animal.css"
export const LocationContext = React.createContext()

export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimals= animal=> {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }
    return (
        <LocationContext.Provider value={
            {
                animals, addAnimals, getAnimals
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}