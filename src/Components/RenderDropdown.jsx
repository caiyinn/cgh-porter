import React from 'react';
import { Container, TextField, Typography, MenuItem, InputAdornment } from '@mui/material';
// import { formStyles } from '../styles/formStyles';

const formStyles = {
    width: "60%",
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "0px 20px",
    color: "#645B4F",
    borderColor: "#A0A0A0",
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#A0A0A0',
        },
        '&:hover fieldset': {
            borderColor: '#A0A0A0',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#A0A0A0',
        },
    }
};

const RenderDropdown = ({ label, value, options, handleChange, id, name, adornment, disabled}) => {
    return (
        <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px", width: "100%" }}>
            <Typography variant="subtitle1" sx={{ fontFamily: "Poppins", fontSize: "14px", width: "20%", textAlign: "left", color: "#727272", whiteSpace: "nowrap" }}>
                {label}
            </Typography>
            <TextField
                select
                labelId={`${id}-label`}
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                onChange={handleChange}
                sx={formStyles} 
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: '14px' }}>
                            {adornment}
                        </InputAdornment>
                    ),
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </TextField>
        </Container>
    );
};

 
export default RenderDropdown;