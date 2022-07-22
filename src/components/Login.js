import "./log.css"

function Login(props){
    return(
        <>
            
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="my_img" className="card_img" />
                    <div className="card_info">
                        <span className="card__category">{props.title}</span>
                        <h3 className="card_title">{props.role}</h3>
                        <a href={props.link} >
                            <button>{props.word}</button>
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Login;