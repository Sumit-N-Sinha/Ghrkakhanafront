import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import FoodService from '../service/FoodService'

const ListAllFoodComponent = () => {

    const [food, setFood] = useState([])

    useEffect(() => {

        getAllCustomers();
    }, [])

    const getAllCustomers = () => {
        FoodService.getAllCustomers().then((response) => {
            setFood(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Food </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Food </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Food Id </th>
                    <th> Name </th>
                    <th> Price </th>
                    <th> Quantity </th>
                    <th> Image </th>
                </thead>
                <tbody>
                    {
                        food.map(
                            food =>
                            <tr key = {food.id}> 
                                <td> {food.id} </td>
                                <td> {food.name} </td>
                                <td>{food.price}</td>
                                <td>{food.quantity}</td>
                                <td>{food.image}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAllFoodComponent