import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import SideBar from "../component/sidebar";
import "../assests/css/dashboard.css";

export default function App() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  useEffect(() => {
    console.log(email, password)
    if(!email || !password) {
        navigate('/login');
    }
 }, [navigate]);

  return (
    <div className="dashboard">
        <div className="sidebar">
            <SideBar />
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>
)
}