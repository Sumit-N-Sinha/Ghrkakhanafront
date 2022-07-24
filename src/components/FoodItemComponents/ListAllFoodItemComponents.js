import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import FoodItemService from '../../service/FoodItemService'
import Navbar from '../navbar/Navbar'

const ListAllFoodItemComponents = () => {

    const [food, setFood] = useState([])

    useEffect(() => {

        getAllFoodItems();
    }, [])

    const getAllFoodItems = () => {
        FoodItemService.getAllFoodItems().then((response) => {
            setFood(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteFoodItems = (foodId) => {
       FoodItemService.deleteFoodItems(foodId).then((response) =>{
        getAllFoodItems();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <>
        <div className='backk'>
            <Navbar />
        </div>
        
        <div className='container'>
            <h2 className = "text-center"> List FoodItems </h2>
            {/* <Link to = "/add-customer" className = "btn btn-primary mb-2" > Add Customer </Link> */}
            <div className='liststyle'>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Food Id </th>
                    <th> Name </th>
                    <th>  Price </th>
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

                                <td>
                                    <Link className="btn btn-info" to={`/edit-food/${food.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteFoodItems(food.id)}
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

export default ListAllFoodItemComponents