import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
} from "react-router-dom";
import Adm from "../admin/Adm";
import Createcust from "../customer/Createcust";
import Cust from "../customer/Cust";
import Customer from "../customer/Customer";
import Log from "../Log";

function Pathh(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Log />}/>
                <Route path="/Cust" element={<Cust />} />
                <Route path="/Admin" element={<Adm />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/Create" element={<Createcust />} />
            </Routes>
        </Router>
    );
}
export default Pathh;