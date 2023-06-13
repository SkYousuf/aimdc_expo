import React from "react";
import Features from "./Features";
import './About.css'
import './Features.css'
import RegistrationPage from "./RegistrationPage";
import Footer from "./Footer";
import './Footer.css'
import './RegistrationPage.css'



function About(){
    return <div>
        <h1>About Expo 2023</h1>
        <div className="mdiv">
            <div className="abt">
                <ul>
                    <li>
                        <p>The growth of franchise industry in india shows no signs of slowingndown. The sector proved
                            to be
                            highlyprofitable in 2021 and 2022.</p>
                    </li>
                    <li>
                        <p>Franchising sector contributes arround 2.0% to the GDP and forcasted to contribute 5% to
                            national
                            income by 2025.</p>
                    </li>
                    <li>
                        <p>Franchise management will grow at a whopping 30-35percent per year.</p>
                    </li>
                    <li>
                        <p>India has already made his place as the second largest franchise market globally(after the
                            United
                            states). With arround 1.5 lakh franchises and more than 5000 franchisers operating in the
                            country.
                        </p>
                    </li>
                    <li>
                        <p>Franchises are a popular way for entrepreneurs to start a business, especially when entering
                            a highly
                            competitive industry such as fast food. One big advantage to purchasing a franchise is you
                            have
                            access to an established company's brand name.</p>
                    </li>
                    <li>
                        <p>A franchise is a joint venture between a franchisor and a franchisee. The franchisor is the
                            original
                            business. It sells the right to use its name and idea. The franchisee buys this right to
                            sell the
                            franchisor's goods or services under an existing business model and trademark.</p>
                    </li>
                    <li>
                        <p>There are many advantages to investing in a franchise. Widely recognized benefits include a
                            ready-made business formula to follow. A franchise comes with market-tested products and
                            services,
                            and in many cases established brand recognition.</p>
                    </li>
                </ul>
            </div>
            <div className="img1"><img style={{borderRadius:"20px"}} width={650} height={500} src="images/exhibImg.jpg" alt="" /></div>
            {/* <div class="A2"><img width="600px" style="border-radius: 5px;" src="images/exhibImg.jpg" alt=""></div> <div></div> */}
        </div>
        <Features />
        <RegistrationPage />
        <Footer/>
    </div>
}
export default About;