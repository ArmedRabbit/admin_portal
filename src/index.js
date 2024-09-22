import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);


// import { createRoot } from 'react-dom/client';
// const root = createRoot(container);
// root.render(<App tab="home" />);