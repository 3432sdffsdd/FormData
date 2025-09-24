import React from "react";
import { useNavigate } from "react-router-dom";

const Stage2 = ({ dt, getData, reset }) => {
  const Navigator = useNavigate();

  const inc = () => {
    Navigator("/Stage3");
  };

  const dec = () => {
    Navigator("/Stage1");
  };

  return (
    <>
      <div className="button-group">
        <button className="btn" onClick={dec}>
          ⬅ Previous
        </button>
        <button className="btn" onClick={inc}>
          Next ➡
        </button>

        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>

      <input
        type="text"
        onChange={getData}
        name="qualification"
        value={dt.qualification}
        placeholder="Enter Your qualification"
      />
      <input
        type="text"
        onChange={getData}
        name="address"
        value={dt.address}
        placeholder="Enter Your Address"
      />
    </>
  );
};

export default Stage2;
