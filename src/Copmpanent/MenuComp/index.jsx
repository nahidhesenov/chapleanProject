import "./menu.css"
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MenuComp() {
    return (
        <div className="menuContainer">
            <div>
                <div style={{ background: 'rgba(39, 44, 70, 1)', display: 'flex', gap: '10px', padding: '20px', borderRadius: "15px", boxShadow: "0 0 5px #1D9BF0" }}>
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
                    <h4 style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Getting Started</h4>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Installation</p>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Project Structure</p>
                </div>
                <div style={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                    <h4 style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Building Your Application</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Routing</p>
                        <ChevronRightIcon sx={{ color: 'gainsboro' }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Data Fetching</p>
                        <ChevronRightIcon sx={{ color: 'gainsboro' }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Rendering</p>
                        <ChevronRightIcon sx={{ color: 'gainsboro' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuComp