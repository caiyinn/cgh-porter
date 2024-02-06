import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import UploadIcon from '@mui/icons-material/Upload';
import MonitorIcon from '@mui/icons-material/Monitor';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import autove from '../assets/autoveLogo.png';
import { Link } from "react-router-dom"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TodayIcon from '@mui/icons-material/Today';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HandymanIcon from '@mui/icons-material/Handyman';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
    const location = useLocation();
    const [menuCollapse, setMenuCollapse] = useState(false)
    const iconColor = {
        color: "#A0A0A0", 
        maxWidth: "20px",
    }
    const handleMenuCollapse = () => {
        setMenuCollapse(!menuCollapse)
    }
    // const isActive = (path) => {
    //     if (path === location.pathname) {
    //         return true;
    //     }
    //     return false;
    // }
    const isActive = (path) => {
        return path === location.pathname;
    }


    const getDTNow = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();
        month = month < 10 ? '0' + month : month;
        dt = dt < 10 ? '0' + dt : dt;
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        return {
            date: year + "-" + month + "-" + dt,
            hour: hour,
            minute: minute,
            second: second
        }
    }
    const dt = getDTNow();

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
            <Sidebar width={"200px"} collapsed={menuCollapse} style={{backgroundColor:"white", height:'auto'}}>
                <Menu style={{marginTop:"20px", fontSize:"14px"}}>
                    <MenuRoundedIcon 
                    className="toggle-menu"
                    onClick={handleMenuCollapse} 
                    style={{marginLeft:"25px", marginBottom:"20px", color:"#696969"}}/>
                    {/* <img src={autove} id="appIcon"/> */}
                    <img src={autove} id="appIcon" style={{ maxWidth: '40px', height: 'auto', display: 'block', margin: '15px auto' }} />

                    <MenuItem className="dashboard"
                        sx={{marginTop:"20px", fontSize:"14px", fontFamily:"Poppins"}}
                        icon={<MonitorIcon style={iconColor}/>} 
                        // disabled={true}
                        style={{backgroundColor: isActive("/home") ? "#f0f0f0" : "transparent"}}
                        component={<Link to="/home"/>}
                        >Dashboard
                    </MenuItem>
                    <MenuItem 
                        sx={{marginTop:"20px", fontSize:"14px", fontFamily:"Poppins"}}
                        icon={<SmartToyIcon style={iconColor}/>}
                        component={<Link to="/robots"/>}
                        disabled={true}
                        style={{backgroundColor: isActive("/robots") ? "#f0f0f0" : "transparent"}}
                        >Robots
                    </MenuItem>
                    <MenuItem 
                        sx={{marginTop:"20px", fontSize:"14px", fontFamily:"Poppins"}}
                        icon={<LogoutIcon style={iconColor}/>}
                        disabled={true}
                        // onClick={handleLogout}
                        style={{backgroundColor: isActive("/logout") ? "#f0f0f0" : "transparent"}}
                        >Logout
                    </MenuItem>

                </Menu>
                {menuCollapse ? null :
                <div className="footer" style={{position:"absolute",display:"flex", bottom:"0", width:"100%", fontSize:"12px", color:"#696969"}}>
                    <div style={{display: "flex"}}>
                        <CalendarMonthIcon style={{fontSize:"16px", marginLeft:"10px", marginTop:"11px", color:`${iconColor.color}`}}/>
                        <p style={{marginLeft:"5px", marginBottom:"10px", fontFamily:"Poppins"}}>
                                {dt.date}
                        </p>
                    </div>
                    <div style={{display: "flex", marginLeft:"30px"}}>
                        <AccessTimeFilledIcon style={{fontSize:"12px", marginTop:"14px", color:`${iconColor.color}`, fontFamily:"Poppins"}}/>
                        <p style={{marginLeft:"5px", marginBottom:"10px", fontFamily:"Poppins"}}>
                            {dt.hour + ":" + dt.minute}
                        </p>
                    </div>
                </div>
                }

            </Sidebar>
        </div>
    );
}
 
export default SideBar;
