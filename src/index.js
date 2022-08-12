import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './components/SideBar';
import ContentWarapper from './components/ContentWrapper';
import './assets/css/App.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <div id="wrapper">
    <SideBar />
    </div>
    </BrowserRouter>
    

);
