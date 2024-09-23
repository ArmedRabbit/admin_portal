import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assests/css/sidebar.css'; // Ensure this path is correct

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebar-container">
      <h2 className='dashboard-title'>Dashboard</h2>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li className={`menu-item ${selected === "home" ? "selected" : ""}`} onClick={() => setSelected("home") || toggleMenu()}>
          <Link to="/">Home</Link>
        </li>
        <li className={`menu-item ${selected === "ignition" ? "selected" : ""}`} onClick={() => setSelected("ignition") || toggleMenu()}>
          <Link to="/ignition">Ignition Hours</Link>
        </li>
        <li className={`menu-item ${selected === "fuel" ? "selected" : ""}`} onClick={() => setSelected("fuel") || toggleMenu()}>
          <Link to="/fuel">Fuel Quality</Link>
        </li>
        <li className={`menu-item ${selected === "voltage" ? "selected" : ""}`} onClick={() => setSelected("voltage") || toggleMenu()}>
          <Link to="/voltage">AC Voltage</Link>
        </li>
        <li className={`menu-item ${selected === "remotely" ? "selected" : ""}`} onClick={() => setSelected("remotely") || toggleMenu()}>
          <Link to="/remotely">Remotely Control</Link>
        </li>
        <li className={`menu-item signout`} onClick={() => {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          navigate('/login');
        }}>
          <Link>Sign Out</Link>
        </li>
      </ul>
    </div>
  );
}