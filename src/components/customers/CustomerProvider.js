import React, { useState} from "react"
import "./Customer.css"
export const Customercontext = React.createContext()

export const CustomerProvider = (props) => {
    const [customers, setcustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setcustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }
    return (
        <Customercontext.Provider value={
            {
                customers, addCustomer, getCustomers
        }}>
            {props.children}
        </Customercontext.Provider>
    )
}
