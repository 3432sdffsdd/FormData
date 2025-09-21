import React from "react";

const Stage1=({dt,getData} )=>
{
    console.log("asd", dt)
    return(
<>
        <input type="text" onChange={getData}  name="firstname"  value={dt.firstname} placeholder="Enter Your Name"/>
       <input type="email"  onChange={getData}  name="email"  value={dt.email} placeholder="Enter Your email"/>
              <input type="number"  name="phonenumber"  value={dt.phonenumber} placeholder="Enter Your Contact#"/>


</>
    )
}

export default Stage1;