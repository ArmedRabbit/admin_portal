import { Outlet } from "react-router-dom";

import SideBar from "../component/sidebar";
import "../assests/css/dashboard.css";

export default function Home () {
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