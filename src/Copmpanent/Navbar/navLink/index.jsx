import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./navlink.css"

function NavLink() {
    return (
        <div className="linkCart">
            <Link className="navLink" to="/" >What is Chaplean</Link>
            <Link className="navLink" to="/" >Our difference</Link>
            <Link className="navLink" to="/" >Pricing</Link>
            <Link className="navLink" to="/" >Docs</Link>
            <Button style={{ borderRadius: '30px' }} variant="contained">
                <Link className="btnLink" to="/" >Contact Us</Link>
            </Button>
        </div>
    )
}

export default NavLink