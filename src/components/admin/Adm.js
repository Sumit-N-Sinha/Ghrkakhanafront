import Login from "../Login";
import Navbar from "../navbar/Navbar";

function Adm(){
    return(
        <>
            <div className="backk">
            <Navbar />
            </div>
            <Login
            imgsrc=""
            title="Admin Login"
            role="" 
            link="Adminlog"
            name=""
            />
            <Login
            imgsrc=""
            title="Register"
            role="" 
            link=""
            name=""
            />
            
        </>
    );
}
export default Adm;