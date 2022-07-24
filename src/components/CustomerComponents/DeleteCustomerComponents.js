import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../../service/CustomerService'
import Navbar from '../navbar/Navbar'

const DeleteCustomerComponent = () => {

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
       CustomerService.deleteCustomer(customerId).then((response) =>{
        getAllCustomers();

       }).catch(error =>{
           console.log(error);
       })
        
    }
    return(
        <div>
        <div className='backk'>
            <Navbar />
        </div>
            <form className="container">
                Enter the number you want to del
                <input type="text" ></input>
            </form>
    {/* <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link> */}
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(customer.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </div>
                                    )
}

export default DeleteCustomerComponent