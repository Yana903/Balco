import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="wraper">
      <Header />
      <Nav />     
    </div>
    </BrowserRouter>
  );
}

export default App;
