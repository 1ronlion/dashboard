import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './components/SideBar';
import ContentWarapper from './components/ContentWrapper';
import './assets/css/App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <div id="wrapper">
    <SideBar />
    <ContentWarapper />
    </div>
    </>


);
