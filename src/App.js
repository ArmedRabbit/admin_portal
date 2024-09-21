// import { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import "./assests/css/App.css";

export default function App() {

  // useEffect(() => {
  //   if (sessionStorage.user == null) {
  //     window.location.href = "/login";
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
