import { Link } from "react-router-dom"
import MenuComp from "../MenuComp"
import SearchComp from "../Search"
import "./home.css"


function Home() {

    const homeArr = [
        {
            id: 1,
            text: "Join our Community",
            description: "If you have questions about anything related to Chaplean, you're always welcome to ask our community"
        },
        {
            id: 2,
            text: "Join our Community",
            description: "If you have questions about anything related to Chaplean, you're always welcome to ask our community"
        },
        {
            id: 3,
            text: "Title",
            description: "If you have questions about anything related to Chaplean, you're always welcome to ask our community"
        },
        {
            id: 4,
            text: "Join our Community",
            description: "If you have questions about anything related to Chaplean, you're always welcome to ask our community"
        },
        {
            id: 5,
            text: "Title",
            description: "If you have questions about anything related to Chaplean, you're always welcome to ask our community"
        },
        {
            id: 6,
            text: "Join our Community",
            description: "If you have questions about anything related to Chaplean, you're always welcome to ask our community"
        },
    ]

    return (
        <div className="homeContainer">
            <MenuComp />
            <div className="homeCard">
                <div className="homeComp">
                    <h1>Introduction</h1>
                    <p>Welcome to the Chaplean documentation</p>
                </div>
                <div className="homeComp">
                    <h1>What is Chaplean?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                    <p>Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>
                    <p>In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. <Link className="homeLink">Fusce</Link> (hover: <Link className="homeLink">Fusce</Link> ) vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui.</p>
                </div>
                <div className="homeComp">
                    <h1>What is Chaplean?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                    <p>Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>
                    <p>In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. <Link className="homeLink">Fusce</Link> (hover: <Link className="homeLink">Fusce</Link> ) vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui.</p>
                </div>
                <div className="homeMiniCartContainer">
                    {
                        homeArr.map(({ id, text, description }) => {

                            return <div className="homeMiniCart" key={id}>
                                <h3>{text}</h3>
                                <p>{description}</p>
                            </div>

                        })
                    }
                </div>

            </div>
            <SearchComp />
        </div>
    )
}
export default Home