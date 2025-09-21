import React from "react";

const Stage2=({dt,getData})=>
{
    return(
<>
        <input type="text"  onChange={getData}  name="qualification"  value={dt.qualification} placeholder="Enter Your qualification"/>
       <input type="text"  onChange={getData} name="address"  value={dt.address} placeholder="Enter Your Address"/>


</>
    )
}

export default Stage2;