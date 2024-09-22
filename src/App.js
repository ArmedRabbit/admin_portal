import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import "./assests/css/App.css";
import { login } from './firebase';

// if (sessionStorage.email == null) {
//   window.location.href = "/login";
// } else {
//   login(sessionStorage.email, sessionStorage.password)
//     .then((user) => {
//       if (user.code == 200) {
//         notification.success({
//           description: user.message,
//           duration: 1
//         });
//         window.location.href = '/';
//       } else {
//         notification.error({
//           description: user.message,
//           duration: 1
//         });
//         window.location.href = '/login';
//       }
//     });
// }

export default function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
