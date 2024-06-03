import icon from "./icon.png";
import "./navResponsiv.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import NavLogo from "../navLogo";
import ClearIcon from '@mui/icons-material/Clear';

function NavBarResponsive() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    return (
        <>
            <React.Fragment>
                <div className="navResponsive">
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <img src={icon} alt="" />

                            </IconButton>
                        </Tooltip>
                    </Box>
                </div>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            background: 'rgba(39, 44, 70, 1)',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            width: '60%'
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <div style={{ display: "flex", flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                        <div style={{display:'flex',alignItems:'center',maxWidth:'100%',justifyContent:"space-around" }}>
                            <NavLogo />
                            <ClearIcon onClick={handleClose} style={{fontSize:'xx-large',color:'#1D9BF0' , cursor:'pointer'}} />
                        </div>
                        <Link className="navLink" to="/" >What is Chaplean</Link>
                        <Link className="navLink" to="/" >Our difference</Link>
                        <Link className="navLink" to="/" >Pricing</Link>
                        <Link className="navLink" to="/" >Docs</Link>
                        <Button style={{ borderRadius: '30px', width: "50%" }} variant="contained">
                            <Link className="btnLink" to="/" >Contact Us</Link>
                        </Button>
                    </div>
                </Menu>
            </React.Fragment>
        </>
    )
}

export default NavBarResponsive