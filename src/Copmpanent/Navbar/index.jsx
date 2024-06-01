import NavBarResponsive from "./NavBarResponsiv"
import NavLink from "./navLink"
import NavLogo from "./navLogo"
import "./navbar.css"

function Navbar() {
    return (
        <div className="navContainer">
            <div className="navCart1" >
                <NavLogo />
            </div>
            <div className="navCart2">
                <NavLink />
            </div>
            <NavBarResponsive />
        </div>
    )
}

export default Navbar