import axios from 'axios'


class OrderService{

    getAllOrders(){
        return axios.get("http://localhost:9292/order/all")
    }

    createOrder(order){
        return axios.post("http://localhost:9292/order/create", order)
    }

    getOrderById(orderId){
        return axios.get("http://localhost:9292/order/get" + '/' + orderId);
    }

    updateOrder(orderId, order){
        return axios.put("http://localhost:9292/order/update" + '/' +orderId, order);
    }

    deleteOrder(orderId){
        return axios.delete("http://localhost:9292/order/delete" + '/' + orderId);
    }
}

export default new OrderService();