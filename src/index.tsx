import React from "react";
import ReactDOM from "react-dom/client"; // используем 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root")!); // Добавляем '!'
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);