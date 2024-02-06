import { Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const AllTable = ({actions, type, columns, items, onRefresh}) => {
    // const actions = ["Edit"];

    const navigate = useNavigate();

    const header = {
        fontSize:"14px",
        color:"grey",
        fontWeight:"bold",
        backgroundColor:"#F5F9FF",
        whiteSpace: "nowrap"
    }

    const content = {
        fontSize:"12px",
        color:"black",
    }

    const activeContent = {
        fontSize:"12px",
        color:"#12B76A",
        padding:"5px 20px",
    }

    const inActiveContent = {
        fontSize:"12px",
        color:"#FF2222",
    }

    const commonStatusStyle = {
        fontSize: "15px",
        borderRadius: "40px",
        height: "50%",
        padding: "8px 20px",
        marginRight: "20px",
    };


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    const handleDelete = (itemId) => {
        if (window.confirm("Are you sure you want to delete this store?")) {
            // deleteItem(itemId);
        }
    }


    // const rowsToShow = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const rowsToShow = items && Array.isArray(items) 
    ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : [];

    const itemCount = items && Array.isArray(items) ? items.length : 0;

    const renderRow = (info) => {
        return (
            <TableRow key={info._id} sx={{ cursor: 'pointer', backgroundColor: "white", '&:hover': { backgroundColor: '#f5f5f5' } }}>
                {columns.map(column => (
                    <TableCell 
                        key={column.id} 
                        align="center" 
                        sx={{
                            ...content,
                            ...(column.id === 'status' && info.status === 'Completed'  && { color: "#12B76A" }), 
                            ...(column.id === 'status' && info.status === 'Charging' && { color: "#12B76A" }), 
                            ...(column.id === 'status' && info.status === 'Idle' && { color: "#12B76A" }),
                            ...(column.id === 'status' && info.status === 'Busy' && { color: "#FF2222" }),
                        }}
                    >
                        {info[column.id]}
                    </TableCell>
                ))}
            </TableRow>
        );
    };
    
    
    

    const renderActions = (info) => {
        const iconStyle = {
            color: "#A0A0A0", 
            margin: "10px 3px",
            '&:hover': {
                color: "#727272", 
            }
        };
        return actions.map((action, index) => {
            switch(action) {
                case "view":
                    return <ViewIcon 
                    key={index} 
                    sx={iconStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/${type}/${info._id}`);
                    }}
                    />;
                case "edit":
                    return <EditIcon 
                    key={index} 
                    sx={iconStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/${type}/edit/${info._id}`);
                    }}
                    />;
                case "delete":
                    return <DeleteIcon 
                    key={index} 
                    sx={iconStyle}
                    onClick={(e) => {
                        e.stopPropagation();
                        // handleDelete(info._id);
                    }}
                    />;
                default:
                    return null;
            }
        });
    };
    
    return (
        <Paper elevation={4} sx={{ display: 'flex', flexDirection: 'column', borderRadius:"8px" }}>
            <TableContainer sx={{ backgroundColor: "#white", borderRadius: "8px", alignItems: "center", overflowY: "auto", height:'30vh' }}>
                <Table stickyHeader>
                    <TableHead sx={{ width: "100%", margin: "auto" }}>
                        <TableRow sx={{ width: "100%", margin: "auto" }}>
                            {columns.map((column) => (
                                <TableCell key={column.id} align="center" sx={header}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsToShow.map(info => renderRow(info))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[4,8,16]}
                component="div"
                count={itemCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ flexShrink: 0 }} // Prevent pagination from shrinking
            />
        </Paper>
    );
};
 
export default AllTable;