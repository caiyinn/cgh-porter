import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { TextField, Button, Paper, Typography, Box, Container } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SideBar from '../Components/SideBar';
import Header from './dashboard/Components/Header';
import ToggleTab from './dashboard/Components/ToggleTab';

const Overview = () => {
    return ( 
        <div style={{display:"flex", flex:"row", overflow: "hidden", height:"100vh"}}>
            <SideBar />
            <div style={{ flexGrow: "1", display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'auto',backgroundColor:"#F7F7F7",  width:"100%" }}>
                <Header />
                <ToggleTab />
            </div>
        </div>
     );
}
 
export default Overview;