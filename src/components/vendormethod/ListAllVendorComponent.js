import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import VendorService from '../service/VendorService'

const ListAllVendorComponent = () => {

    const [vendor, setVendor] = useState([])

    useEffect(() => {

        getAllVendor();
    }, [])

    const getAllVendor = () => {
        VendorService.getAllVendor().then((response) => {
            setVendor(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Vendor </h2>
            <Link to = "/VendorList" className = "btn btn-primary mb-2" > Add Vendor </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Vendor Id </th>
                    <th> Name </th>
                    <th> Status </th>
                    
                </thead>
                <tbody>
                    {
                        vendor.map(
                            vendor =>
                            <tr key = {vendor.id}> 
                                <td> {vendor.id} </td>
                                <td> {vendor.name} </td>
                                <td>{vendor.email}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAllVendorComponent