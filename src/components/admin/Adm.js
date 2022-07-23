import Login from "../Login";
import Navbar from "../navbar/Navbar";

function Adm(){
    return(
        <>
            <div className="backk">
            <Navbar />
            </div>
            <Login
            imgsrc="https://img.freepik.com/premium-vector/register-now-isolated-icon-banner-trendy-style-yellow-speech-bubble-arrow-abstract-elements-registration-button-ui-design-element-web-site-subscribe-membership-vector-illustration_87771-11526.jpg?w=2000"
            title="Register"
            role="Create Admin"
            link="Create"
            word="Register"
             />

            <Login
            imgsrc="https://cdn4.vectorstock.com/i/1000x1000/89/13/user-login-icon-vector-21078913.jpg"
            title="Already a customer,Login"
            role="Login Admin"
            link="AdminControl"
            word="Login"
             />
            
        </>
    );
}
export default Adm;