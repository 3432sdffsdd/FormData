import { useState } from "react";
import "./App.css";
import Stage1 from "./Components/Stage1";
import Stage2 from "./Components/Stage2";
import Stage3 from "./Components/Stage3";
import { Routes, Route } from "react-router-dom";

function App() {
  const [tracker, setTracker] = useState(1);
  const [form, setForm] = useState([]);
  const [data, setData] = useState({
    firstname: "",
    email: "",
    contact: "",
    qualification: "",
    address: "",
    city: "",
    province: "",
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
    e.preventDefault();
    setForm((valu) => [...valu, data]);
    setTracker(1);
  };

  const reset = () => {
    setData({
      firstname: "",
      email: "",
      contact: "",
      qualification: "",
      address: "",
      city: "",
      province: "",
    });
  };

  return (
    <div className="app-container">
      <h2 className="title">Bio Data Form</h2>

      <Routes>
        <Route
          path="/"
          element={<Stage1 dt={data} getData={getData} reset={reset} />}
        />
        <Route
          path="/Stage2"
          element={<Stage2 dt={data} getData={getData} reset={reset} />}
        />
        <Route
          path="/Stage3"
          element={<Stage3 dt={data} getData={getData} reset={reset} />}
        />
      </Routes>

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
