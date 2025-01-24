import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import Students from "./Students";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
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

  return (
    <>
     
      <Sidebar />
    </>
  );
};

export default Dashboard;
