import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Menu } from 'antd';

export default function SideBar() {
  const [selected, setSelected] = useState("home");

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li className={`home ${selected=="home"? "selected" : ""}`} onClick={()=>setSelected("home")}>
          <Link to="/">Home</Link>
        </li>
        <li className={`ignition ${selected=="ignition"? "selected" : ""}`} onClick={()=>setSelected("ignition")}>
          <Link to="/ignition">Ignition Hours</Link>
        </li>
        <li className={`fuel ${selected=="fuel"? "selected" : ""}`} onClick={()=>setSelected("fuel")}>
          <Link to="/fuel">Fuel Quality</Link>
        </li>
        <li className={`voltage ${selected=="voltage"? "selected" : ""}`} onClick={()=>setSelected("voltage")}>
          <Link to="/voltage">AC Voltage</Link>
        </li>
        <li className={`remotely ${selected=="remotely"? "selected" : ""}`} onClick={()=>setSelected("remotely")}>
          <Link to="/remotely">Remotely Control</Link>
        </li>
      </ul>
    </div>
  );
}
