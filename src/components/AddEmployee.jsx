import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = () => {
    axios.post(API_URL, employee).then(() => navigate("/"));
  };

  return (
    <div className="bg-gray-100 p-5 rounded">
      <input placeholder="Name" name="name" onChange={handleInput} className="input" />
      <input placeholder="Email" name="email" onChange={handleInput} className="input" />
      <input placeholder="Department" name="department" onChange={handleInput} className="input" />
      <input placeholder="Salary" name="salary" onChange={handleInput} className="input" />

      <button className="btn" onClick={saveEmployee}>
        Save
      </button>
    </div>
  );
}
