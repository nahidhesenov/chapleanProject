import "./footer.css"
import logo from "./../Navbar/navLogo/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

function Footer() {
    return (
        <div>
            <div className="footerContainer">
                <div className="footerComp">
                    <div style={{ padding: "20px 0px" }}>
                        <img src={logo} alt="" />
                    </div>
                    <div className="footerLinkComp" style={{ display: 'flex', flexDirection: 'column', gap: '10px 0px' }}>
                        <Link className="footerLink" to="/" >What is Chaplean</Link>
                        <Link className="footerLink" to="/" >Our difference</Link>
                        <Link className="footerLink" to="/" >Pricing</Link>
                        <Link className="footerLink" to="/" >Docs</Link>
                        <Link className="footerLink" to="/" >Contact Us</Link>
                    </div>
                </div>
                <div className="footerComp" style={{display:"flex",alignItems:'center'}}>
                    <Button sx={{background:'rgba(41, 44, 61, 1)', borderRadius:'40px' , boxShadow:"0 0 5px #1D9BF0", padding:"15px"}} variant="contained" startIcon={<Download/>}>
                        Download
                    </Button>
                </div>
            </div>
            <p style={{ textAlign: "center", color: "gainsboro", fontFamily: 'sans-serif', padding: '10px' }}>Privacy & Policy - Cookies</p>
        </div>
    )
}

export default Footer