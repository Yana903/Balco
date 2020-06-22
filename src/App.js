import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
  
function App() {
    return (
        <BrowserRouter>
            <div className = "wrapper" >
              <Header />
              <Nav />
            </div>
        </BrowserRouter >
    );
}

export default App;