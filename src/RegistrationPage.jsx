import { useState } from 'react';

function RegistrationPage() {

    const [option, setOption] = useState();


    return <div>

        <form className='reg' action="">
            <div className='formBorder'>
                <h2 id='regh2'>Register Now</h2> <hr style={{ color: "lightgray" }} />
                <div className='slct' >


                    {/* <td>Select Expo</td> */}
                    <> <select className='optselect' >
                        <option value="" disabled selected >Select Expo</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Chennai</option>
                        <option value="Chennai">Hyderabad</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>



                        {/* <td>Register As</td> */}
                        <div className='regAs'>
                            <div id='vis'>
                                <input id='vi' type="radio" value="Visitor" name="abc" onChange={(e) => setOption(e.target.value)} /><label for="vi">Visitor</label> 
                            </div>
                            <div id='exh'>
                                <input id='ex' type="radio" name="abc" value="Exhibitor" onChange={(e) => setOption(e.target.value)} /> <label for="ex">Exhibitor</label>
                            </div>

                        </div>




                        {/* <tr>
                            <td>Register As</td>
                            <td>
                                <select style={{ padding: "10px 150px 10px 8px ", fontSize: "20px", borderColor: "blue", borderRadius: "6px" }} onChange={(e) => setOption(e.target.value)}>
                                    <option value="" disabled>Select</option>
                                    <option value="Visitor">Visitor</option>
                                    <option value="Exhibitor">Exhibitor</option>
                                </select>
                            </td>
                        </tr> */}
                        {
                            (option === 'Visitor') ?
                                // <div className='visitors'>
                                <>
                                    {/* <td>Full Name</td> */}
                                    <input className='visitors' type="email" placeholder="Enter your full name" required />
                                    {/* <td>Email</td> */}
                                    <input className='visitors' type="email" placeholder="Enter your email" required />
                                    {/* <td>Mobile</td> */}
                                    <input className='visitors' type="text" placeholder="Enter your contact number" required />
                                    {/* <td>City</td> */}
                                    <input className='visitors' type="text" placeholder="Enter your city" required />

                                </>
                                // </div>
                                :
                                // <div className='Exhibitors'>
                                <>
                                    {/* <td>Full Name</td> */}
                                    <input className='Exhibitors' type="text" placeholder="Enter your full name" required />
                                    {/* <td>Company Name</td> */}
                                    <input className='Exhibitors' type="text" placeholder="Enter your company name" required />
                                    {/* <td>Email</td> */}
                                    <input className='Exhibitors' type="email" placeholder="Enter your email" required />
                                    {/* <td>Mobile</td> */}
                                    <input className='Exhibitors' type="text" placeholder="Enter your contact number" required />
                                    {/* <td>City</td> */}
                                    <input className='Exhibitors' type="text" placeholder="Enter your city" required />

                                </>
                            // </div>
                        }

                        <div className='buttons'>
                            <button id='clrbtn'>Clear</button>
                            <button id='sbtbtn'>Submit</button>
                        </div>
                    </>
                </div>
            </div>
        </form>

    </div>
}
export default RegistrationPage;