import Login from "../Login";
import './cust.css';

function Cust(){
    return(
        <>
            <Login
            imgsrc="https://img.freepik.com/premium-vector/register-now-isolated-icon-banner-trendy-style-yellow-speech-bubble-arrow-abstract-elements-registration-button-ui-design-element-web-site-subscribe-membership-vector-illustration_87771-11526.jpg?w=2000"
            title="Register"
            role="Create Customer"
            link="Create"
            word="Register"
             />

            <Login
            imgsrc="https://cdn4.vectorstock.com/i/1000x1000/89/13/user-login-icon-vector-21078913.jpg"
            title="Already a customer,Login"
            role="Login Customer"
            link="Customer"
            word="Login"
             />
             
        </>
    );
}
export default Cust;