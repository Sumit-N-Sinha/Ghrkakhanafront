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
                <Route path="/Create" element={<Createcust />} />
                <Route path="/Custorderd" element={<Custorderd />} />
                <Route path="/Custstatus" element={<Custstatus />} />
                <Route path="/Custfood" element={<Custfood />} />
                <Route path="/Custprofile" element={<Custprofile />} />
                <Route path="/Vendorfood" element={<Vendorfood />} />
                <Route path="/Vendordash" element={<Vendordash />} />
                <Route path="/Vendorstatus" element={<Vendorstatus />} />
                <Route path="/Vendorprofile" element={<Vendorprofile />} />
            </Routes>
        </Router>
    );
}
export default Pathh;
