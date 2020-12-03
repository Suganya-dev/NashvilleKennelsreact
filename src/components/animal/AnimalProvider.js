import React, { useState} from "react"
import "./Animal.css"
export const AnimalContext  = React.createContext()

export const AnimalProvider = (props) => {
    const [animal, setAnimal] = useState([])
 const [ searchTerms, setTerms ] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimal)
    }
    
    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${ id }?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    const addAnimal= animal=> {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    return (
        <AnimalContext.Provider value={
            {
                animal, addAnimal, getAnimals,getAnimalById,updateAnimal,searchTerms,setTerms,releaseAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}