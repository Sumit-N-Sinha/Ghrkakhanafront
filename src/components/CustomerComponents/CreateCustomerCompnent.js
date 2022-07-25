import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomerService from '../../service/CustomerService'
import Navbar from '../navbar/Navbar';
const CreateCustomerComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')


    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        const customer = {name, email, address, phone}

        if(id){
            CustomerService.updateCustomer(id, customer).then((response) => {
                navigate('/Customer');
            }).catch(error => {
                console.log(error)
                toast("error");
            })

        }else{
            CustomerService.createCustomer(customer).then((response) =>{

                console.log(response.data)
    
                navigate.push('/customer');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        CustomerService.getCustomerById(id).then((response) =>{
            setName(response.data.name)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setPhone(response.data.phone)


        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Customer</h2>
        }else{
            return <h2 className = "text-center">Add Customer</h2>
        }
    }

    return (
        <div>
        <div className='backk'>
            <Navbar />
        </div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "Name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Phone :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter mobile number"
                                        name = "phone"
                                        className = "form-control"
                                        value = {phone}
                                        onChange = {(e) => setPhone(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCustomer(e)} >Submit </button>
                                <Link to="/Cust" className="btn btn-danger"> Cancel </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CreateCustomerComponent