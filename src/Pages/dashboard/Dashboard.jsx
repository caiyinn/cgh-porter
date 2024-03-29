import React, { useState } from 'react';
import { Grid, Card, Typography, Box, Tabs, Tab, CardContent } from '@mui/material';
import dummyMap from '../../assets/dummyMap.jpg';
import AllTable from './Components/AllTable';

const Dashboard = () => {
    const [value, setValue] = useState("Door Status");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        { id: 'robotId', label: 'Robot ID' },
        { id: 'name', label: 'Robot Name' },
        { id: 'battery', label: 'Battery' },
        { id: 'status', label: 'Status' },
    ];

    const dummyRobots = [
        { robotId: 'R001', name: 'Flashbot', battery: '85%', status: 'Offline' },
        { robotId: 'R002', name: 'Flashbot', battery: '90%', status: 'Offline' },
        { robotId: 'R003', name: 'Flashbot', battery: '78%', status: 'Offline' },
        { robotId: 'R004', name: 'Flashbot', battery: '62%', status: 'Offline' },
        { robotId: 'R005', name: 'Flashbot', battery: '100%', status: 'Offline' },
    ];

    const columnJobs = [
        { id: 'jobNumber', label: 'Job Number' },
        { id: 'robotId', label: 'Robot ID' },
        { id: 'jobType', label: 'Job Type' },
        { id: 'from', label: 'From' },
        { id: 'to', label: 'To' },
        { id: 'status', label: 'Status' },
        { id: 'createdTime', label: 'Created Time' },
        { id: 'completedTime', label: 'Completed Time' },
    ];

    const dummyJobs = [
        {
            jobNumber: 'J003',
            robotId: 'Flashbot',
            jobType: 'Charging Job',
            from: 'FeverExt',
            to: 'ChargeCGH',
            status: 'Charging',
            createdTime: '2023-02-01 12:00',
            completedTime: '2023-02-01 12:00',
        },
        {
            jobNumber: 'J002',
            robotId: 'Flashbot',
            jobType: 'Delivery Job',
            from: 'Pharmacy',
            to: 'FeverExt',
            status: 'Completed',
            createdTime: '2023-02-01 10:05',
            completedTime: '2023-02-01 10:08',
        },
        {
            jobNumber: 'J001',
            robotId: 'Flashbot',
            jobType: 'Call Job',
            from: 'ChargeCGH',
            to: 'Pharmacy',
            status: 'Completed',
            createdTime: '2023-02-01 10:00',
            completedTime: '2023-02-01 10:03',
        },
    ];
    
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', padding: 3, width:"100%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} elevation={4}>
                        <Box sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                                Robot Position
                                <Typography variant="body2" sx={{ display: 'inline', pl: 2, color: 'grey' }}>
                                    2 seconds ago
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, position: 'relative' }}>
                            <img src={dummyMap} alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#F5F9FF' }} elevation={4}>
                        <Tabs value={value} onChange={handleChange} variant="fullWidth" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tab value="Door Status" label="Door Status" />
                            <Tab value="Lift Status" label="Lift Status" />
                        </Tabs>
                        <CardContent sx={{ flexGrow: 1 , bgcolor:"white"}}>
                            {value === 'Door Status' && (
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml:1, mr:1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection:'row' }}>
                                        <Typography variant="body1" component="div" sx={{ fontSize:"14px" }}>
                                            Door 1
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ color:"#12B76A", fontSize:"14px" }}>
                                            Connected
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection:'row' }}>
                                        <Typography variant="body1" component="div" sx={{ fontSize:"14px" }}>
                                            Door 2
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ color:"#FF2222", fontSize:"14px" }}>
                                            Disconnected
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                            {value === 'Lift Status' && (
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml:1, mr:1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection:'row' }}>
                                        <Typography variant="body1" component="div" sx={{ fontSize:"14px" }}>
                                            Lift 1
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ color:"#12B76A", fontSize:"14px" }}>
                                            Connected
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection:'row' }}>
                                        <Typography variant="body1" component="div" sx={{ fontSize:"14px" }}>
                                            Lift 2
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ color:"#FF2222", fontSize:"14px" }}>
                                            Disconnected
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <AllTable columns={columns} items={dummyRobots} />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <AllTable columns={columnJobs} items={dummyJobs} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
