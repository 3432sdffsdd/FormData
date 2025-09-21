import React from "react";

const Stage3=({dt,getData})=>
{
    return(
<>
        <input type="text"  name="city" onChange={getData} value={dt.city} placeholder="Enter Your city"/>
       <input type="text"  name="province" onChange={getData}  value={dt.province} placeholder="Enter Your province"/>


</>
    )
}

export default Stage3;