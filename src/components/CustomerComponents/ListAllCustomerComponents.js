import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../../service/CustomerService'
import Navbar from '../navbar/Navbar'

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

    const deleteEmployee = (customerId) => {
       CustomerService.deleteEmployee(customerId).then((response) =>{
        getAllCustomers();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <>
            <div className='backk'>
                <Navbar />
            </div>
        
        <div className = "container">
            <h2 className = "text-center"> List Customers </h2>
            {/* <Link to = "/add-customer" className = "btn btn-primary mb-2" > Add Customer </Link> */}
            <div className='liststyle'>
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

                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${customer.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(customer.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
        </>
    )
}

export default ListAllCustomerComponent