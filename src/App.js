import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

const theme = {};

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className = "wraper" >
                    <Header />
                    <Nav />
                </div>
            </ThemeProvider>
        </BrowserRouter >
    );
}

export default App;