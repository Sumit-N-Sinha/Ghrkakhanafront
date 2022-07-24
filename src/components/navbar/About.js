import Navbar from "./Navbar";

function About(){
    return(
        <>
            <div className="backk">
                <Navbar />
            </div>
            <br></br><br></br>
            <div className="liststyle">
                <p style={{textAlign:"center"}}>To maintain healthy life style, people have started preferring to home
                <br></br>
made food as compared to the restaurant food. GharKaKhana is an<br></br>
online food ordering application where customer can place the order<br></br>
online from different vendors near by their location. And vendors<br></br>
provide homemade food at their door step as quickly as possible.</p>
            </div>
        </>
    );
}
export default About;