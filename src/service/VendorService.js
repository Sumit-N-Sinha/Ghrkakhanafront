import axios from 'axios'


class VendorService{

    getAllVendors(){
        return axios.get("http://localhost:9292/admin/all")
    }

    createVendor(vendor){
        return axios.post("http://localhost:9292/admin/create", vendor)
    }

    getVendorById(vendorId){
        return axios.get("http://localhost:9292/admin/get" + '/' + vendorId);
    }

    updateVendor(vendorId, vendor){
        return axios.put("http://localhost:9292/admin/update" + '/' +vendorId, vendor);
    }

    deleteVendor(vendorId){
        return axios.delete("http://localhost:9292/admin/delete" + '/' + vendorId);
    }
}

export default new VendorService();