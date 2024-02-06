import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from 'react';
import { Box, Typography, Select, MenuItem, Breadcrumbs, Link } from '@mui/material';


const Header = () => {
    const [map, setMap] = useState('Autove'); 
    const maps = ['Autove', 'CGH', 'Chart'];
    const handleMapChange = (e) => {
        setMap(e.target.value); 
    };
    const customSeparator = <Typography component="span" style={{ margin: '0 8px', verticalAlign: 'middle', fontWeigh:"600", fontSize:"20px" }}>&gt;</Typography>;
    return (
        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: '10px 30px' }}>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Breadcrumbs aria-label="breadcrumb" separator={customSeparator} style={{ color: "#A0A0A0" }}>
                    <SmartToyIcon style={{ color: "#858585", maxWidth: "50px", marginTop:"5px" }} />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={map}
                        onChange={handleMapChange}
                        sx={{ color: "#858585", '.MuiOutlinedInput-notchedOutline': { border: 'none' }, fontWeight: 600, fontSize: 20}}
                        disableUnderline
                    >
                        {maps.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </Breadcrumbs>

            </Box>
        </Box>
    );
};

export default Header;

