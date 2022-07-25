import axios from 'axios'


class FoodItemService{

    getAllFoodItems(){
        return axios.get("http://localhost:9292/vendor/all")
    }

    getAllFoodAsc(){
        return axios.get("http://localhost:9292/customer/price/asc")
    }

    getAllFoodDesc(){
        return axios.get("http://localhost:9292/customer/price/desc")
    }

    createFoodItem(food){
        return axios.post("http://localhost:9292/vendor/create", food)
    }

    getFoodById(foodId){
        return axios.get("http://localhost:9292/vendor/get" + '/' + foodId);
    }

    updateFoodItems(foodId, food){
        return axios.put("http://localhost:9292/vendor/update" + '/' +foodId, food);
    }

    deleteFoodItems(foodId){
        return axios.delete("http://localhost:9292/vendor/delete" + '/' + foodId);
    }
}

export default new FoodItemService();