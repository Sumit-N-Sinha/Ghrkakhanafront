import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import VendorService from '../../service/VendorService'
import Navbar from '../navbar/Navbar'

const ListAllVendorComponents = () => {

    const [vendor, setVendor] = useState([])

    useEffect(() => {

        getAllVendors();
    }, [])

    const getAllVendors = () => {
        VendorService.getAllVendors().then((response) => {
            setVendor(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteVendor = (vendorId) => {
       VendorService.deleteVendor(vendorId).then((response) =>{
        getAllVendors();

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
            <h2 className = "text-center"> List Vendors </h2>
            {/* <Link to = "/add-customer" className = "btn btn-primary mb-2" > Add Customer </Link> */}
            <div className='liststyle'>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Vendor Id </th>
                    <th> Name </th>
                    <th>  Status </th>
                    <th> Order Id </th>
                </thead>
                <tbody>
                    {
                        vendor.map(
                            vendor =>
                            <tr key = {vendor.id}> 
                                <td> {vendor.vendorId} </td>
                                <td> {vendor.name} </td>
                                <td>{vendor.status}</td>
                                <td>{vendor.orderId}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-vendor/${vendor.vendorId}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteVendor(vendor.vendorId)}
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

export default ListAllVendorComponents