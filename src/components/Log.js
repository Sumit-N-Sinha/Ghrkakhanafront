import React from "react";
import Login from "./Login";
import "./log.css";
import Navbar from "./navbar/Navbar";
function Log(){
return(
    <>
    <div className="backk">
    <Navbar />
    </div>
    <h2 className="heading_style">Choose your Role</h2>

    <Login
    imgsrc="https://www.freeiconspng.com/thumbs/customers-icon/customers-icon-7.jpg"
    title="I am here to order"
    role="Customer"
    link="Cust"
    word="Enter"
     />

     <Login
    imgsrc="data:image/png;base64,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"
    title="I am here to receive order"
    role="Vendor"
    link="Vendor"
    word="Enter"
     />

     <Login
    imgsrc="data:image/png;base64,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"
    title="I am here to fix your details"
    role="Admin"
    link="AdminControl"
    word="Enter"
     />
    
  </>
);
}
export default Log;