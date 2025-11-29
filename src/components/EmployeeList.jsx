import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../api";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = () => {
    axios.get(API_URL).then((res) => setEmployees(res.data));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const deleteEmployee = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => loadEmployees());
  };

  return (
    <div>
      <Link
        to="/add"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-5 inline-block"
      >
        ➕ Add Employee
      </Link>

      <table className="w-full border text-left mt-3">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Salary</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="p-2 border">{emp.name}</td>
              <td className="p-2 border">{emp.email}</td>
              <td className="p-2 border">{emp.department}</td>
              <td className="p-2 border">₹{emp.salary}</td>
              <td className="p-2 border space-x-2">
                <Link
                  to={`/edit/${emp.id}`}
                  className="bg-yellow-500 px-3 py-1 text-white rounded"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-600 px-3 py-1 text-white rounded"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
