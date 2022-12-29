import React from "react";
import * as ReactDomClient from "react-dom/client";
import App from "./App";

import './css/main.css';

const app = ReactDomClient.createRoot(document.getElementById("app"));
app.render(<App />);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<input type="text" placeholder="Help text3"/>);