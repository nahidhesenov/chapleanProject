import MenuDrawer from "./Menu"
import SearchDrawer from "./Search"
import "./drawer.css"


function Drawer() {
    return (
        <div className="drawerContainer">
            <MenuDrawer />
            <SearchDrawer />
        </div>
    )
}

export default Drawer