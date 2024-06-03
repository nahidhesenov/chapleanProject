import React, { useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



function SearchDrawer() {

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
                <h4 onClick={toggleDrawer(true)} style={{ color: "gainsboro", fontFamily: "sans-serif", cursor: 'pointer' }}>search</h4>
            </div>
            <Drawer
                anchor={"right"}
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
                        <div style={{ display: 'block', width: '100%', padding: '10px' }} >
                            <div style={{ background: 'rgba(39, 44, 70, 1)', borderRadius: '20px', display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 10px" }}>
                                <SearchIcon style={{ color: 'white' }} />
                                <input style={{ padding: '10px 25px', background: 'rgba(39, 44, 70, 1)', border: 'none', width: '100%', color: 'white' }} placeholder="Search" type="text" />
                            </div>
                            <div style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                                <h4 className="hoverSearch">On this page</h4>
                                <p className="hoverSearch">Accesbility</p>
                                <p className="hoverSearch">What is Chaplean</p>
                                <p className="hoverSearch">How to use</p>
                                <p className="hoverSearch">Accesbility</p>
                            </div>
                            <hr style={{ borderColor: '#1D9BF0' }} />
                            <div style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                                <p className="hoverSearch">Edit this page</p>
                                <p className="hoverSearch">Managed Chaplean</p>
                            </div>
                        </div>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default SearchDrawer