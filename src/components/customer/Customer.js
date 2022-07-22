import Login from "../Login";
import "./cust.css"

function Customer(){
    return(
        <>
            <Login
            imgsrc=""
            title="Get Details"
            role=""
            link=""
            word=""
             />
             <Login
            imgsrc=""
            title="Add Order in cart"
            role="Add the food items"
            link=""
            word="Add"
             />
             <Login
            imgsrc=""
            title="My order details"
            role="View cart"
            link=""
            word="View"
             />
             <Login
            imgsrc=""
            title="Edit Details"
            role=""
            link=""
            word="Update"
             />
             <Login
            imgsrc=""
            title="Get the current status"
            role=""
            link=""
            word="Status"
             />
        </>
    );
}
export default Customer;