import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import OrderService from '../../service/OrderService'

const ListAllOrderComponent = () => {

    const [order, setOrder] = useState([])

    useEffect(() => {

        getAllOrders();
    }, [])

    const getAllOrders = () => {
        OrderService.getAllOrders().then((response) => {
            setOrder(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteOrder = (orderId) => {
       OrderService.deleteOrder(orderId).then((response) =>{
        getAllOrders();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Orders </h2>
            {/* <Link to = "/add-customer" className = "btn btn-primary mb-2" > Add Customer </Link> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Order Id </th>
                    <th> Total price </th>
                    <th>  Date </th>
                    <th> Customer Id </th>
                </thead>
                <tbody>
                    {
                        order.map(
                            order =>
                            <tr key = {order.id}> 
                                <td> {order.oid} </td>
                                <td> {order.totalprice} </td>
                                <td>{order.date}</td>
                                <td>{order.cid}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-order/${order.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteOrder(order.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAllOrderComponent