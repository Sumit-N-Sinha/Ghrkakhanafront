import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Adm from "../admin/Adm";
import Adminlog from "../admin/Adminlog";
import Createcust from "../customer/Createcust";
import Cust from "../customer/Cust";
import Custfood from "../customer/Custfood";
import Customer from "../customer/Customer";
import Custorderd from "../customer/Custorderd";
import Custprofile from "../customer/Custprofile";
import Custstatus from "../customer/Custstatus";
import Log from "../Log";
import Vendor from "../vendor/vendor";

function Pathh(){
    return(
        
        <Router>
            <Routes>
                <Route path="/" element={<Log />}/>
                <Route path="/Cust" element={<Cust />} />
                <Route path="/Admin" element={<Adm />} />
                <Route path="/Vendor" element={<Vendor />} />
                <Route path="/Adminlog" element={<Adminlog />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/Create" element={<Createcust />} />
                <Route path="/Custorderd" element={<Custorderd />} />
                <Route path="/Custstatus" element={<Custstatus />} />
                <Route path="/Custfood" element={<Custfood />} />
                <Route path="/Custprofile" element={<Custprofile />} />
            </Routes>
        </Router>
    );
}
export default Pathh;