import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import FoodItemService from '../../service/FoodItemService';
import Navbar from '../navbar/Navbar';
const CreateFoodItemComponent = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')


    const navigate = useNavigate();
    const {fid} = useParams();

    const saveOrUpdateFoodItem = (e) => {
        e.preventDefault();

        const food = {name, price, quantity, image}

        if(fid){
            FoodItemService.updateFoodItem(fid, food).then((response) => {
                navigate.push('/food')
            }).catch(error => {
                console.log(error)
            })

        }else{
            FoodItemService.createFoodItem(food).then((response) =>{

                console.log(response.data)
    
                navigate.push('/food');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        FoodItemService.getFoodById(fid).then((response) =>{
            setName(response.data.name)
            setPrice(response.data.price)
            setQuantity(response.data.quantity)
            setImage(response.data.image)


        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(fid){
            return <h2 className = "text-center">Update FoodItem</h2>
        }else{
            return <h2 className = "text-center">Add FoodItem</h2>
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
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Quantity :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter quantiy"
                                        name = "quantity"
                                        className = "form-control"
                                        value = {quantity}
                                        onChange = {(e) => setQuantity(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Image :</label>
                                    <input
                                        type = "file"
                                        placeholder = "Enter image"
                                        name = "image"
                                        className = "form-control"
                                        value = {image}
                                        onChange = {(e) => setImage(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateFoodItem(e)} >Submit </button>
                                <Link to="/Customer" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CreateFoodItemComponent