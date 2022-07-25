import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Adm from "../admin/Adm";
import Adminlog from "../admin/Adminlog";
import AdminControl from "../admin/AdminControl";
import AdminCF from "../admin/AdminCF";
import AdminCP from "../admin/AdminCP";
import AdminCS from "../admin/AdminCS";
import Createcust from "../customer/Createcust";
import Cust from "../customer/Cust";
import Custfood from "../customer/Custfood";
import Customer from "../customer/Customer";
import Custorderd from "../customer/Custorderd";
import Custprofile from "../customer/Custprofile";
import Custstatus from "../customer/Custstatus";
import Log from "../Log";
import Vendor from "../vendor/vendor";
import Vendordash from "../vendor/Vendordash";
import Vendorfood from "../vendor/Vendorfood";
import Vendorprofile from "../vendor/Vendorprofile";
import Vendorstatus from "../vendor/Vendorstatus";
import ListAllCustomerComponent from "../CustomerComponents/ListAllCustomerComponents";
import CreateCustomerComponent from "../CustomerComponents/CreateCustomerCompnent";
import CreateOrderComponent from "../OrderComponents/CreateOrderComponent";
import ListAllOrderComponent from "../OrderComponents/ListAllOrderComponents";
import ListAllFoodItemComponent from "../FoodItemComponents/ListAllFoodItemComponents";
import CreateFoodItemComponent from "../FoodItemComponents/CreateFoodItemComponents";
import CreateVendorComponent from "../VendorComponents/CreateVendorComponents";
import ListAsc from "../CustomerComponents/ListAsc";
import ListDesc from "../CustomerComponents/ListDesc";
import AdminVendor from "../admin/AdminVendor";
import DeleteCustomerComponent from "../CustomerComponents/DeleteCustomerComponents";
import About from "../navbar/About";
import DeleteOrderById from "../OrderComponents/DeleteOrderByid";
import ListAllVendorComponents from "../VendorComponents/ListAllVendorComponents";




function Pathh(){
    return(
        
        <Router>
            <Routes>
                <Route path="/" element={<Log />}/>
                <Route path="/Cust" element={<Cust />} />
                <Route path="/Admin" element={<Adm />} />
                <Route path="/Vendor" element={<Vendor />} />
                <Route path="/Adminlog" element={<Adminlog />} />
                <Route path="/AdminControl" element={<AdminControl/>}/>
                <Route path="/AdminCF" element={<AdminCF/>}/>
                <Route path="/AdminCP" element={<AdminCP/>}/>
                <Route path="/AdminCS" element={<AdminCS/>}/>
                <Route path="/Customer" element={<Customer />} />
                <Route path="/Create" element={<CreateCustomerComponent />} />
                <Route path="/Custorderd" element={<Custorderd />} />
                <Route path="/Custstatus" element={<Custstatus />} />
                <Route path="/Custfood" element={<Custfood />} />
                <Route path="/Custprofile" element={<Custprofile />} />
                <Route path="/Vendorfood" element={<Vendorfood />} />
                <Route path="/Vendordash" element={<Vendordash />} />
                <Route path="/Vendorstatus" element={<Vendorstatus />} />
                <Route path="/Vendorprofile" element={<Vendorprofile />} />
                <Route path="/AdminVendor" element={<AdminVendor />} />
                <Route path="/DeleteCust" element={<DeleteCustomerComponent />} />
                <Route path="/all" element={<ListAllCustomerComponent />} />
                <Route path="/order" element={<CreateOrderComponent />} />
                <Route path="/allorders" element={<ListAllOrderComponent />} />
                <Route path="/food" element={<ListAllFoodItemComponent />} />
                <Route path="/add-food" element={<CreateFoodItemComponent />} />
                <Route path="/add-vendor" element={<CreateVendorComponent />} />
                <Route path="/foodasc" element={<ListAsc />} />
                <Route path="/fooddesc" element={<ListDesc />} />
                <Route path="/about" element={<About />} />
                <Route path="/cancelorder" element={<DeleteOrderById />} />
                <Route path="/allvendor" element={<ListAllVendorComponents />} />
            </Routes>
        </Router>
    );
}
export default Pathh;
