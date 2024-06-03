import Drawer from "./Drawer"
import NavBarResponsive from "./NavBarResponsiv"
import NavLink from "./navLink"
import NavLogo from "./navLogo"
import "./navbar.css"

function Navbar() {
    return (
        <div className="navContainer">
            <div style={{ display: 'flex',justifyContent: 'space-between',background: '#272C46'}}>
                <div className="navCart1" >
                    <NavLogo />
                </div>
                <div className="navCart2">
                    <NavLink />
                </div>
                <NavBarResponsive />
            </div>
            <Drawer/>
        </div>
    )
}

export default Navbar