import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const DeleteOrderById = () =>{

    const[id,setId] = useState('')
    useEffect(() => {
        axios.delete("http://localhost:9292/order/delete/"+{id})
        .then(console.log("Delete Successful"));
    },[]);

    return(
        <>
            <div className="backk">
                <Navbar />
            </div>
            <div className="liststyle">
            <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {id}
                                        onChange = {(e) => setId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {useEffect()} >Submit </button>
                                <Link to="/Customer" className="btn btn-danger"> Cancel </Link>
            </div>
        </>
    )
}
export default DeleteOrderById