import React from "react";
import "../src/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Store from "./context/store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Store>
  );
}

export default App;
