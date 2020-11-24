import React from "react"
import "./Customer.css"

export const Customer = ({animal}) =>(
    <section className="customer">
    <h3 className="customer__name">{animal.name}</h3>
    <div className="customer__place">Address:{animal.address}</div>
</section>
)