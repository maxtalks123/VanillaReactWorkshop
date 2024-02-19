import React from "react";
import ReactDOM from "react-dom/client";
import {
  Button,
  ConditionalRender,
  GetData,
  UpdateData,
  PropsButton,
  Form,
  NavBar,
} from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <GetData />
    <Button />
    <UpdateData />
    <PropsButton />
    <Form />
    <ConditionalRender />
  </React.StrictMode>
);
