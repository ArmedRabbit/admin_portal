import { Outlet } from "react-router-dom";
import { notification } from "antd";

import SideBar from "../component/sidebar";
import { login } from "../firebase";
import "../assests/css/dashboard.css";

export default function Home() {
    if (localStorage.getItem("email") == null) {
        window.location.href = "/login";
    } else {
        login(localStorage.getItem("email"), localStorage.getItem("password"))
            .then((user) => {
                if (user.code == 200) {
                    notification.success({
                        description: user.message,
                        duration: 1
                    });
                    localStorage.setItem("email", localStorage.getItem("email"));
                    localStorage.setItem("password", localStorage.getItem("password"));
                } else {
                    notification.error({
                        description: user.message,
                        duration: 1
                    });
                    window.location.href = '/login';
                }
            });
    }

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