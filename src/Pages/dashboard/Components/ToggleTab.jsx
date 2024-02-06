import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab, Typography, Paper, Container } from '@mui/material';
import Dashboard from '../Dashboard';


const ToggleTab = () => {
    const [value, setValue] = useState("Dashboard");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ( 
        <Box sx={{ width: '90%', padding: "0px 30px", marginTop:"-10px", overflow:'hidden' }}>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <Tab
                value="Dashboard"
                label="Dashboard"
                />
                <Tab value="Adhoc" label="Adhoc" />
            </Tabs>
            {value === "Dashboard" && <Dashboard />}
            {value === "Adhoc" && <h1>Adhoc</h1>}
        </Box>
     );
}
 
export default ToggleTab;