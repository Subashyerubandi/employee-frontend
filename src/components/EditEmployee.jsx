import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../api";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((res) => setEmployee(res.data));
  }, [id]);

  const handleInput = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = () => {
    axios.put(`${API_URL}/${id}`, employee).then(() => navigate("/"));
  };

  return (
    <div className="bg-gray-100 p-5 rounded">
      <input name="name" value={employee.name || ""} onChange={handleInput} className="input" />
      <input name="email" value={employee.email || ""} onChange={handleInput} className="input" />
      <input name="department" value={employee.department || ""} onChange={handleInput} className="input" />
      <input name="salary" value={employee.salary || ""} onChange={handleInput} className="input" />

      <button className="btn" onClick={updateEmployee}>
        Update
      </button>
    </div>
  );
}
