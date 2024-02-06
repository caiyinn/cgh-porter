import React from "react";
import { Container, TextField, Typography } from "@mui/material";

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
const RenderTextField = ({ label, placeholder, type = "text", value, disabled = false, id, handleChange, rows, cols }) => {
    return (
        <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px", width: "100%" }}>
            <Typography variant="subtitle1" sx={{ fontFamily: "Poppins", fontSize: "14px", width: "20%", textAlign: "left", color: "#727272", whiteSpace: "nowrap" }}>
                {label}
            </Typography>
            <TextField
                required
                id={id}
                name={id}
                size="small"
                variant="outlined"
                color="secondary"
                type={type}
                value={value}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                sx={formStyles}
                disabled={disabled}
                onChange={handleChange}
                InputLabelProps={type === "date" ? { shrink: true } : null}
                multiline={type === "multiline" ? true : false}
            />
        </Container>
    );
};
 
export default RenderTextField;