import { useState } from "react";
import "./App.css";
import Stage1 from "./Components/Stage1";
import Stage2 from "./Components/Stage2";
import Stage3 from "./Components/Stage3";

function App() {
  const [tracker, setTracker] = useState(1);
  const [form, setForm] = useState([]);
  const [data, setData] = useState({
    firstname: "ammad",
    email: "mr.ammadarif@gmail.com",
    contact: "4343",
    qualification: "be",
    address: "johar",
    city: "karachi",
    province: "sindh",
  });

  const getData = (val) => {
    const name = val.target.name;
    const value = val.target.value;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveData = (e) => {
 e.preventDefault();    setForm((valu) => [...valu, data]);
    setTracker(1);
  };

  const inc = () => {
    if (tracker === 3) return;
    setTracker((prevVal) => prevVal + 1);
  };

  const dec = () => {
    if (tracker === 1) return;
    setTracker((prevVal) => prevVal - 1);
  };

  return (
    <div className="app-container">
      <h2 className="title">Bio Data Form</h2>

      <div className="button-group">
        <button className="btn" onClick={dec}>
          ⬅ Previous
        </button>
        <button className="btn" onClick={inc}>
          Next ➡
        </button>
        {tracker === 3 && (
          <button className="btn submit" onClick={saveData}>
            ✅ Submit
          </button>
        )}
      </div>

      {tracker === 1 && (
  <div className="stage-wrapper">
    <Stage1 dt={data} getData={getData} />
  </div>
)}
{tracker === 2 && (
  <div className="stage-wrapper">
    <Stage2 dt={data} getData={getData} />
  </div>
)}
{tracker === 3 && (
  <div className="stage-wrapper">
    <Stage3 dt={data} getData={getData} />
  </div>
)}


      <h3 className="subtitle">Submitted Records</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {form.map((val, index) => (
            <tr key={index}>
              <td>{val.firstname}</td>
              <td>{val.address}</td>
              <td>{val.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
