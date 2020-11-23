import React from "react"
import "./Location.css"
// import {LocationList} from "./location/LocationList.js"

export const Location =({ location }) => (
    <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <div className="location__place">{location.address}</div>
</section>
)