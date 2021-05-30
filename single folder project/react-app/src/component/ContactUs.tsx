import Header from "./Header";

const Contactus = ()=>{

    document.body.style.backgroundColor="#9EA9FA";

    return(
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="text-center">
                <ul style={{fontSize:"30px"}} className="list-unstyled mb-0">
                    <li style={{marginTop:"15%"}}><i className="bi bi-map-fill" style={{ fontSize:"150%", color:"#3F49B6"}}></i>
                        <p>Unknown location, India</p>
                    </li>

                    <li style={{marginTop:"15%"}}><i className="bi bi-telephone-fill" style={{fontSize:"150%", color:"#3F49B6"}}></i>
                        <p>+91 XXX XXX XXXX</p>
                    </li>

                    <li style={{marginTop:"15%"}}><i className="bi bi-envelope-fill" style={{fontSize:"150%", color:"#3F49B6"}}></i>
                        <p>teamchampions@gmail.com</p>
                    </li>
                    <li style={{marginTop:"23%"}}>
                        <i style={{ fontSize:"150%", margin:"auto 7%", color:"#3F49B6"}} className="bi bi-facebook"></i>
                        <i style={{ fontSize:"150%", margin:"auto 7%", color:"#3F49B6"}} className="bi bi-twitter"></i>
                        <i style={{ fontSize:"150%", margin:"auto 7%", color:"#3F49B6"}} className="bi bi-instagram"></i>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Contactus;