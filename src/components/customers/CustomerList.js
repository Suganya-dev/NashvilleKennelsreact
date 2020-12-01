import React, { useContext, useEffect } from "react"
import { Customercontext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    // This state changes when `getLocations()` is invoked below
    const { customers, getCustomers } = useContext(Customercontext)

    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getCustomers()
    },[])

    return (
        <div className="Customers">
        {
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </div>
    )
}
