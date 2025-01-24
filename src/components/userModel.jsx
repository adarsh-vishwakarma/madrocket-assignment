import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const UserModel = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState({});
console.log()
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    class: "",
    section: "",
    rollNumber: "",
    email: "",
    phone: "",
    address: "",
    guardianName: "",
    guardianPhone: "",
    dob: "",
    gender: "",
    isActive: false, // Checkbox
    guardianRelation: "", // Select
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting
    console.log("Hii");

    const form = e.target;
    const formData = new FormData(form);
    const value = [...formData.values()];
    const isEmpty = value.includes("");
    // const gender = formData.get("photo").name
    // console.log(gender)
    // console.log(isEmpty)
    // const data = Object.fromEntries(formData.entries());
    // console.log(data)
    if (isEmpty) {
      toast.error("Fill all details");
      return;
    } else {
      const userID = uuidv4();
      await setDoc(doc(db, "Students", userID), {
        userId: userID,
        id: formData.get("id"),
        name: formData.get("name"),
        email: formData.get("email"),
        class: formData.get("class"),
        section: formData.get("section"),
        rollNumber: formData.get("rollNumber"),
        dob: formData.get("dob"),
        gender: formData.get("gender"),
        activeStudent: formData.get("isActive") === "on" ? "yes" : "no",
        studentPhone: formData.get("phone"),
        studentAddress: formData.get("address"),
        image: formData.get("photo").name,
        guardianName: formData.get("guardianName"),
        guardianRelation: formData.get("guardianRelation"),
        fatherName: formData.get("fatherName"),
        fatherPhone: formData.get("fatherPhone"),
      });
      toast.success("Data added successfully");
      onClose()
    }
  };

  return (
    <div className="absolute w-full inset-0 bg-opacity-50 flex backdrop-blur-sm justify-center items-center z-50 overflow-y-auto">
      <div className="bg-white p-6 w-full max-w-4xl m-10 rounded-lg shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Add Student</h2>
        <form onSubmit={handleFormSubmit}>
          {/* First Row: ID, Name, Email */}
          <div className="flex flex-wrap justify-between gap-6 mb-2">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">ID</label>
              <input
                type="text"
                name="id"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Second Row: Class, Section, Roll Number */}
          <div className="flex flex-wrap justify-between gap-6 mb-2">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">Class</label>
              <input
                type="text"
                name="class"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Section
              </label>
              <input
                type="text"
                name="section"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Roll Number
              </label>
              <input
                type="number"
                name="rollNumber"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Third Row: Date of Birth, Gender, Active Student */}
          <div className="flex flex-wrap justify-between items-center gap-6 mb-2">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">Gender</label>
              <div className="flex items-center gap-4">
                <label className="text-sm">
                  <input type="radio" name="gender" value="Male" /> Male
                </label>
                <label className="text-sm">
                  <input type="radio" name="gender" value="Female" /> Female
                </label>
              </div>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Active Student
              </label>
              <input
                type="checkbox"
                name="isActive"
                className="form-checkbox"
              />
            </div>
          </div>

          {/* Fourth Row: Phone Number, Address */}
          <div className="flex flex-wrap justify-between items-center gap-6 mb-2">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Address
              </label>
              <textarea
                name="address"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Fifth Row: Father Name, Father's Phone */}
          <div className="flex flex-wrap justify-between gap-6 mb-2">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Father Name
              </label>
              <input
                type="text"
                name="fatherName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Father's Phone
              </label>
              <input
                type="tel"
                name="fatherPhone"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Sixth Row: Guardian Name, Guardian Relationship */}
          <div className="flex flex-wrap justify-between items-center gap-6 mb-2">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardianName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">
                Guardian Relationship
              </label>
              <select
                name="guardianRelation"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Guardian">Guardian</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold">Photo</label>
              <input
                type="file"
                name="photo"
                className="w-full p-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-end gap-5 mt-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModel;
