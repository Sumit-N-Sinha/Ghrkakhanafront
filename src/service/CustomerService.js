import axios from 'axios'


class CustomerService{

    getAllCustomers(){
        return axios.get("http://localhost:9292/customer/all")
    }

    createCustomer(customer){
        return axios.post("http://localhost:9292/customer/create", customer)
    }

    getCustomerById(customerId){
        return axios.get("http://localhost:9292/customer/get" + '/' + customerId);
    }

    updateCustomer(customerId, customer){
        return axios.put("http://localhost:9292/customer/update" + '/' +customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete("http://localhost:9292/customer/delete" + '/' + customerId);
    }
}

export default new CustomerService();