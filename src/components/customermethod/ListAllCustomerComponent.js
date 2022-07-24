import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../service/CustomerService'

const ListAllCustomerComponent = () => {

    const [customer, setCustomer] = useState([])

    useEffect(() => {

        getAllCustomers();
    }, [])

    const getAllCustomers = () => {
        CustomerService.getAllCustomers().then((response) => {
            setCustomer(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Customer Id </th>
                    <th> Name </th>
                    <th>  Email </th>
                    <th> Address </th>
                    <th> Phone </th>
                </thead>
                <tbody>
                    {
                        customer.map(
                            customer =>
                            <tr key = {customer.id}> 
                                <td> {customer.id} </td>
                                <td> {customer.name} </td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAllCustomerComponent