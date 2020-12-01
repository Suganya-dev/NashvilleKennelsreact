import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animal.css"

export const AnimalDetails = (props) => {
    const { animal, getAnimalById } = useContext(AnimalContext)

    const [animals, setAnimals] = useState({ location: {}, customer: {}})
    // const [animals, setAnimals] = useState({})
    // const [customer, setCustomers] = useState({})
    // const [location, setLocations] = useState({})

    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimals)
    }, [])

    return (
        <section className="animal">
            <h3 className="animal__name">{animals.name}</h3>
            <div className="animal__breed">{animals.breed}</div>
            <div className="animal__location">Location: {animals.location.name}</div>
            <div className="animal__owner">Customer: {animals.customer.name}</div>
            <button onClick={
                () => {
                    animal(animals)
                        .then(() => {
                            props.history.push("/animals")
                        })
                }
            }>
                Release Animal
            </button>
            <button onClick={() => {
                props.history.push(`/animals/edit/${animals.id}`)
            }}>Edit</button>
        </section>
    )
}