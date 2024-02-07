import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, Container, Switch } from "@mui/material";
import Box from '@mui/material/Box';
import RenderTextField from '../../Components/RenderTextField';
import RenderDropdown from '../../Components/RenderDropdown';
import AllTable from '../dashboard/Components/AllTable';
import autoveLogo from '../../assets/autoveLogo.png';
import Notification from '../../Components/Notification';
import { useNavigate } from 'react-router-dom';

const RenderSwitch = ({ label, checked, onChange, name }) => {
    return (
        <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt:1}}>
            <Typography variant="subtitle1" sx={{ fontFamily: "Poppins", fontSize: "14px", textAlign: "left", color: "#727272" }}>
                {label}
            </Typography>
            <Switch
                checked={checked}
                onChange={onChange}
                name={name}
                color="primary"
                sx={{ mr: 1 }}
            />
        </Container>
    );
};

const Adhoc = () => {

    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("");
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const columns = [
        { id: 'robotId', label: 'Robot ID' },
        { id: 'name', label: 'Robot Name' },
        { id: 'battery', label: 'Battery' },
        { id: 'status', label: 'Status' },
        { id: 'jobQueued', label: 'Job Queued'}
    ];

    const dummyRobots = [
        { robotId: 'R001', name: 'Flashbot', battery: '85%', status: 'Offline', jobQueued: 0 },
        { robotId: 'R002', name: 'Flashbot', battery: '90%', status: 'Offline' , jobQueued: 0 },
        { robotId: 'R003', name: 'Flashbot', battery: '78%', status: 'Offline' , jobQueued: 0 },
        { robotId: 'R004', name: 'Flashbot', battery: '62%', status: 'Offline' , jobQueued: 0 },
        { robotId: 'R005', name: 'Flashbot', battery: '100%', status: 'Offline' , jobQueued: 0 },
    ];
    
    const robots = ['Any Robot', 'Flashbot', 'PuduBot2', 'Swiftbot', 'CC1'];
    const locations = ["Pharmacy", "FeverExt", "Clinic S"];

    const [form, setForm] = useState({
        robotType: "Any Robot",
        pickupLocation: "",
        deliveryLocation: "",
        date: "",
        time: "",
        pickupNow: false,
        closestRobot: true,
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        if (name === "robotType" && value === "Any Robot") {
            setForm(prevForm => ({
                ...prevForm,
                [name]: value,
                closestRobot: true
            }));
        }
        else if(name === "robotType" && value !== "Any Robot") {
            setForm(prevForm => ({
                ...prevForm,
                [name]: value,
                closestRobot: false
            }));
        }
        else{
            setForm(prevForm => ({
                ...prevForm,
                [name]: value
            }));
        }
    };

    const handleSwitchChange = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;
        setForm(prevForm => ({
            ...prevForm,
            [name]: checked
        }));

        if (name === "pickupNow" && checked) {
            setForm(prevForm => ({
                ...prevForm,
                date: new Date().toISOString().split('T')[0], // Sets current date
                time: new Date().toTimeString().split(' ')[0].substring(0, 5), // Sets current time
            }));
        }
        else if (name === "pickupNow" && !checked) {
            setForm(prevForm => ({
                ...prevForm,
                date: "",
                time: "",
            }));
        }
        else if (name === "closestRobot" && checked) {
            setForm(prevForm => ({
                ...prevForm,
                robotType: "Any Robot"
            }));
        }
        else if (name === "closestRobot" && !checked) {
            setForm(prevForm => ({
                ...prevForm,
                robotType: ""
            }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setOpenSnackbar(true);
        setSnackbarSeverity("success");
        setSnackbarMessage("Job Created!");
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    return (
        <div style={{ display: "flex", overflow: "hidden", backgroundColor: "#F7F7F7", width:"100%", height: "100%" }}>
            <Container sx={{ overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column',overflowX: "hidden", alignItems: "center", my: 4, ml: 4, maxWidth: "100%" }}>
                <Paper elevation={5} sx={{ p: 3, width: "100%", maxWidth: "95%", marginTop:'3px', borderRadius:"10px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2 }}>
                        <img src={autoveLogo} alt="Autove Logo" width="40" />
                        <Typography variant="h5" sx={{ ml: 2, fontFamily: "Poppins", fontWeight: "600" }}>
                            Autove Robotics
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "600", mb: 1 }}>
                        Create Job
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Poppins", fontWeight: "400", mb: 3 }}>
                        Please help to fill in the blanks regarding Job details!
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <RenderDropdown label="Robot Type" name="robotType" value={form.robotType} options={robots} handleChange={handleChanges} />
                            <RenderDropdown label="Pick Up Location" name="pickupLocation" value={form.pickupLocation} options={locations} handleChange={handleChanges} />
                            <RenderDropdown label="Delivery Location" name="deliveryLocation" value={form.deliveryLocation} options={locations} handleChange={handleChanges} />
                            <RenderTextField label="Date" type="date" name="date" value={form.date} handleChange={handleChanges} />
                            <RenderTextField label="Pick Up Time" type="time" name="time" value={form.time} handleChange={handleChanges} />
                            <RenderSwitch label="Pick Up Now" checked={form.pickupNow} name="pickupNow" onChange={handleSwitchChange} />
                            <RenderSwitch label="Choose Closest Available Robot" checked={form.closestRobot} name="closestRobot" onChange={handleSwitchChange} />
                            <Button type="submit" variant="contained" sx={{ mt: 3, backgroundColor: "#378FFE", '&:hover': { backgroundColor: "#3474eb" }, width: "40%", mx:2 }}>
                                Create Job
                            </Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
            <Container sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', my: 4, maxWidth: "100%", ml:1, marginBottm:"10px" }}>
                {/* Assuming AllTable is adjusted to fit within this layout */}
                <AllTable columns={columns} items={dummyRobots} />
            </Container>
            <Notification
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
                snackbarMessage={snackbarMessage}
                snackbarSeverity={snackbarSeverity}
                vertical="bottom"
                horizontal="right"
            />
        </div>
    );
};

export default Adhoc;
