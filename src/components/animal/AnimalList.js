import React, {useState, useContext, useEffect } from "react"
import { AnimalContext} from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { Customercontext } from "../customers/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
  const { searchTerms,getAnimals, animal } = useContext(AnimalContext)

  const [ filteredAnimals, setFiltered ] = useState([])

  // Initialization effect hook -> Go get animal data
  useEffect(()=>{
    getAnimals()
}, [])
/*
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */
   useEffect(() => {
    if (searchTerms !== "") {
        // If the search field is not blank, display matching animals
        const subset = animal.filter(anim => anim.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(subset)
    } else {
        // If the search field is blank, display all animal
        setFiltered(animal)
    }
}, [searchTerms, animal])

return (
    <>
        <h1>Animals</h1>

        <button onClick={() => history.push("/animals/create")}>
            Make Reservation
        </button>
        <div className="animal">
            {
                filteredAnimals.map(anim => {
                    return <Animal key={anim.id} animal={anim} />
                })
            }
        </div>
    </>
)
}

// export const AnimalList = (props) => {
// const {animals, getAnimals} = useContext(AnimalContext);
// const { customers, getCustomers } = useContext(Customercontext);
// const { locations, getLocations } = useContext(LocationContext)

// // like responding to CustomEvent

// useEffect(() => {
//     console.log("animalList: Initial render before data")
//     getLocations()
//     .then(getCustomers)
//     .then(getAnimals)
// },[]);

// // which array we are rendering that has to come last in the promises.
//     // .then(getAnimals)
    

// return (
//     <div className="animals">
//              <h1>Animal Appt</h1>
//         <button onClick={() => props.history.push("/animals/create")}>
//             Make Appointment
//         </button>
//       {
//       animals.map((animal) => {
//         const owner = customers.find((c) => c.id === animal.customerId);
//         const clinic = locations.find((l) => l.id === animal.locationId);

//         return (
//           <Animal
//             key={animal.id}
//             location={clinic}
//             customer={owner}
//             animal={animal}
//           />
//         );
//       })}
//     </div>
//   );
// };





