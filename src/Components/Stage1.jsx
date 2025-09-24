import React from "react";
import { useNavigate } from "react-router-dom";

const Stage1 = ({ dt, getData, reset }) => {
  const Navigator = useNavigate();

  const inc = () => {
    Navigator("/Stage2");
  };

  return (
    <>
      <div className="button-group">
        <button className="btn" onClick={inc}>
          Next ➡
        </button>

        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
      ;
      <input
        type="text"
        onChange={getData}
        name="firstname"
        value={dt.firstname}
        placeholder="Enter Your Name"
      />
      <input
        type="email"
        onChange={getData}
        name="email"
        value={dt.email}
        placeholder="Enter Your email"
      />
      <input
        type="number"
        name="phonenumber"
        value={dt.phonenumber}
        placeholder="Enter Your Contact#"
      />
    </>
  );
};

export default Stage1;
