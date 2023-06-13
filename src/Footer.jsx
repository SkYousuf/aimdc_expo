function Footer(){
    return (
    <div>
        {/* <h1>Footer</h1> */}
        {/* <div className="fmdv" style={{}}>
            <div className="fdv1"></div>
            <div className="fdv2"></div>
            <div className="fdv3"></div>
        </div> */}
        <div className="container">
            <div className="row">

                <div>
                    <h2 style={{marginLeft:"200px",color:"#1a88b2"}}>Links</h2>
<p style={{color:"white",marginLeft:"170px",fontSize:"20px"}}>Connect us on</p>
                    <div class="socialIcon"> 
    <i style={{width:""}} class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-twitter"></i>
</div>
                    <div style={{padding:"0px",marginLeft:"60px"}}><br />
                        <img width={60} style={{padding:"20px",borderRadius:"60px"}} src="images/aimdc.jpg" />
                        <img width={60} style={{padding:"20px",borderRadius:"60px"}}  src="images/iman.png" />
                        <img width={60} style={{padding:"20px",borderRadius:"50px"}} src="images/mom1.jpg" />
                        </div>
                </div>

                <div style={{marginLeft:"200px"}}>
                    <h2 style={{color:"#1a88b2"}}>Have a Question?</h2>

                    <p>
                        <a style={{color:"white",textDecoration:"none"}} href="tel:+91 990-297-9079">
                         +91- 9902 9790 79
                        </a>
                    </p>

                    <p>
                        <a style={{color:"white",textDecoration:"none"}} href="mailto:info@aimdcexpo.com">
                            info@aimdcexpo.com
                        </a>
                    </p>
                    <div>
                    <h3 style={{color:"#1a88b2"}}>IT Partner</h3>
                        <a style={{color:"white",textDecoration:"none"}} href="https://fullstackacademy.in/courses-home/" className="site-footer-link">
                            Full Stack Academy Hyderabad
                        </a>
                    </div>
                </div>

                <div style={{marginLeft:"200px",color:"#1a88b2"}}>
                    <h2>Venue of Hyderabad Expo</h2>

                    <p style={{color:"white"}}>
                        METRO CONVENTION, <br/> #6-3-200,Aramghar, Airport Road, <br/> Hyderabad, Telangana 500052
                    </p>
                    
                    <a style={{textDecoration:"none"}} href="https://goo.gl/maps/zri1RHjY6CrQkbhDA">
                        <span style={{color:"#1a88b2"}}>Our Maps</span>
                    </a>
                </div>
            </div>
            <p id="lp" style={{textAlign: 'center',color:"whitesmoke"}}>Copyright © 2023 Franchise & Dealership Expo</p>
        </div>
    </div>
  
    )
}
export default Footer;
   