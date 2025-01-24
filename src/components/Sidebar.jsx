import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase';

const Sidebar = () => {
    const handleLougout = async () => {
        try {
          await auth.signOut();
          window.location.href = "/";
          console.log("User logged out successfully");
        } catch (error) {
          console.log("Error while logout", error);
        }
      };
  return (
    <div className="w-64 h-screen flex justify-center items-center border-r-1">
        <div className="flex flex-col gap-5">
          <button className="w-54 h-12 border rounded-lg text-lg font-semibold">
            <Link to="/student">Students</Link>
          </button>
          <button
            className="w-54 h-12 border rounded-lg text-lg font-semibold cursor-pointer"
            onClick={handleLougout}
          >
            Logout
          </button>
        </div>
      </div>
  )
}

export default Sidebar