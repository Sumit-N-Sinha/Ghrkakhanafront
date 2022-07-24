import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import VendorService from '../../service/VendorService';
import Navbar from '../navbar/Navbar';
const CreateVendorComponent = () => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [oid, setOid] = useState('')


    const navigate = useNavigate();
    const {vid} = useParams();

    const saveOrUpdateVendor = (e) => {
        e.preventDefault();

        const vendor = {name, status, oid}

        if(vid){
            VendorService.updateVendor(vid, vendor).then((response) => {
                navigate.push('/Vendor')
            }).catch(error => {
                console.log(error)
            })

        }else{
            VendorService.createVendor(vendor).then((response) =>{

                console.log(response.data)
    
                navigate.push('/Vendor');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        VendorService.getVendorById(vid).then((response) =>{
            setName(response.data.name)
            setStatus(response.data.status)
            setOid(response.data.oid)


        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(vid){
            return <h2 className = "text-center">Update Vendor</h2>
        }else{
            return <h2 className = "text-center">Add Vendor</h2>
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
                                    <label className = "form-label"> Status :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter status"
                                        name = "status"
                                        className = "form-control"
                                        value = {status}
                                        onChange = {(e) => setStatus(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Order Id :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter order id"
                                        name = "oid"
                                        className = "form-control"
                                        value = {oid}
                                        onChange = {(e) => setOid(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateVendor(e)} >Submit </button>
                                <Link to="/customer" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CreateVendorComponent