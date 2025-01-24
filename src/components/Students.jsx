import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import UserModel from "./userModel"
import Sidebar from "./Sidebar";

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const navigate = useNavigate();
 
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        console.log("Successfully SignIn");
      } else {
        navigate("/");
      }
    });
  };

 
  useEffect(() => {
    fetchUserData();
  }, []);
  const students = [
    { id: "1", name: "John Doe", class: "10", section: "A", rollNumber: "1" },
    { id: "2", name: "Jane Smith", class: "9", section: "B", rollNumber: "2" },
    { id: "3", name: "John Doe", class: "10", section: "A", rollNumber: "1" },
    { id: "4", name: "John Doe", class: "10", section: "A", rollNumber: "1" },
  ];

  return (
    <div className="flex">
      <Sidebar />
   
    <div className="p-8">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer"
      >
        Add Student
      </button>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Class</th>
            <th className="px-4 py-2 border">Section</th>
            <th className="px-4 py-2 border">Roll Number</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-2 border">{student.id}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              <td className="px-4 py-2 border">{student.class}</td>
              <td className="px-4 py-2 border">{student.section}</td>
              <td className="px-4 py-2 border">{student.rollNumber}</td>
              <td className="px-4 py-2 border">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                  View
                </button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen ? (
       <UserModel  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

   
      ) : (
        ""
      )}
    </div>
    </div>
  );
};

export default Students;
