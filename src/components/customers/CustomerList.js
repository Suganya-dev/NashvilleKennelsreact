import React, { useContext, useEffect } from "react"
import { Customercontext } from "./CustomerProvider.js"
import { Customer } from "./Customer.js"
import "./Customer.css"

export const CustomerList = () => {
    // This state changes when `getLocations()` is invoked below
    const { customers, getCustomers } = useContext(Customercontext)

    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getCustomers()
    }, [])

    return (
        <div className="Customers">
        {
            customers.map(cust => <Customer key={cust.id} Address={cust} />)
        }
        </div>
    )
}
