import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import "./assests/css/App.css";

export default function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
