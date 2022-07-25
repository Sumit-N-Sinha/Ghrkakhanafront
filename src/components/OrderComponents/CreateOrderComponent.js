import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import CustomerService from '../../service/CustomerService'
import OrderService from '../../service/OrderService';
import Navbar from '../navbar/Navbar';
const CreateOrderComponent = () => {

    const [totalprice, setTotalprice] = useState('')
    const [date, setDate] = useState('')
    const [cid, setCid] = useState('')
    const [fid, setFid] = useState('')


    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        const order = { date, cid, totalprice, fid}

        if(id){
            OrderService.updateOrder(id, order).then((response) => {
                navigate('/order')
            }).catch(error => {
                console.log(error)
            })

        }else{
            OrderService.createOrder(order).then((response) =>{

                console.log(response.data)
    
                navigate('/order');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        OrderService.getOrderById(id).then((response) =>{
            setTotalprice(response.data.totalprice)
            setDate(response.data.date)
            setCid(response.data.cid)
            setFid(response.data.fid)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Order</h2>
        }else{
            return <h2 className = "text-center">Add Order</h2>
        }
    }

    return (
        <>
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
                                    <label className = "form-label"> Token Number :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter token number"
                                        name = "totalprice"
                                        className = "form-control"
                                        value = {totalprice}
                                        onChange = {(e) => setTotalprice(e.target.value)}
                                        required
                                    />
                                    
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter date"
                                        name = "date"
                                        className = "form-control"
                                        value = {date}
                                        onChange = {(e) => setDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Customer Id :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter customer id"
                                        name = "cid"
                                        className = "form-control"
                                        value = {cid}
                                        onChange = {(e) => setCid(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Food Id :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter food id"
                                        name = "fid"
                                        className = "form-control"
                                        value = {fid}
                                        onChange = {(e) => setFid(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCustomer(e)} >Submit </button>
                                <Link to="/customer" className="btn btn-danger"> Cancel </Link>
                            </form>
                        
                        </div>
                    </div>
                </div>

           </div>

        </>
    )
}

export default CreateOrderComponent