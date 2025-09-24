import React from "react";
import { useNavigate } from "react-router-dom";

const Stage3 = ({ dt, getData, reset, save }) => {
  const Navigator = useNavigate();

  const dec = () => {
    Navigator("/stage2");
  };
  return (
    <>
      <div className="button-group">
        <button className="btn" onClick={dec}>
          ⬅ Previous
        </button>

        <button className="btn" onClick={reset}>
          Reset
        </button>

        <button className="btn" onClick={save}>
          Submit
        </button>
      </div>
      <input
        type="text"
        name="city"
        onChange={getData}
        value={dt.city}
        placeholder="Enter Your city"
      />
      <input
        type="text"
        name="province"
        onChange={getData}
        value={dt.province}
        placeholder="Enter Your province"
      />
    </>
  );
};

export default Stage3;
