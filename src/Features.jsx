import React from "react"
function Features() {
    return <div>
        <h1>Features</h1>
        <div className="m2div">
            <div className="a2">

                <ul>
                    <li ><span style={{ fontWeight: "bolder", color: "yellow", listStyle: "none" }}>Appoint Franchises </span>
                        <p>Get face to face interaction with most prominent investors.</p>
                    </li>

                    <li><span style={{ fontSize: "20px", color: "yellow" }}>Spotlight your start-up </span>
                        <p>Gain exposure for your products or service throgh product demose/display and workshops.</p>
                    </li>
                    <li><span style={{ fontSize: "20px", color: "yellow" }}>Dealers Appointment</span>
                        <p>penetrate new markets with your existing products and services, before investors.</p>
                    </li>
                    <li><span style={{ fontSize: "20px", color: "yellow" }}>Appoint Franchises</span>
                        <p>100+</p>
                    </li>
                    <li><span style={{ fontSize: "20px", color: "yellow" }}>Appoint Franchises</span>
                        <p>1000+ </p>
                    </li>
                </ul>
            </div>
            <div className="img2"><img style={{borderRadius:"20px"}} width={650} height={500} src="images/expo2.jpg" alt="" /></div>
            {/* <div class="A2"><img width="600" style="border-radius: 5px;" src="images/expo2.jpg" alt=""></div> */}
        </div>
    </div>
}
export default Features