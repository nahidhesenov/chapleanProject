import React, { useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function MenuDrawer() {

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };



    return (

        <React.Fragment >
            <div>
                <h4 onClick={toggleDrawer(true)} style={{ color: "gainsboro", fontFamily: "sans-serif", cursor: 'pointer' }}>menu</h4>
            </div>
            <Drawer
                anchor={"left"}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ backgroundColor: '#141526', width: 300, height: '100%' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <div style={{ display: 'block', width: '100%' }} >
                            <div style={{ background: 'rgba(39, 44, 70, 1)', display: 'flex', gap: '10px', padding: '10px', margin: "20px", borderRadius: "15px", boxShadow: "0 0 5px #1D9BF0" }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <PersonIcon sx={{ color: '#141526', background: 'gainsboro', padding: '5px', borderRadius: '10px' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Chaplean App</h3>
                                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Social media platform</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <ExpandMoreIcon sx={{ background: "#141526", color: "gainsboro", borderRadius: "5px", cursor: 'pointer' }} />
                                </div>
                            </div>
                            <div style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                                <h4 className="hoverMenu">Getting Started</h4>
                                <p className="hoverMenu">Installation</p>
                                <p className="hoverMenu">Project Structure</p>
                            </div>
                            <div style={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                                <h4 className="hoverMenu">Building Your Application</h4>
                                <div className="hoverMenu" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p >Routing</p>
                                    <ChevronRightIcon />
                                </div>
                                <div className="hoverMenu" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p >Data Fetching</p>
                                    <ChevronRightIcon />
                                </div>
                                <div className="hoverMenu" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p >Rendering</p>
                                    <ChevronRightIcon />
                                </div>
                            </div>
                        </div>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default MenuDrawer