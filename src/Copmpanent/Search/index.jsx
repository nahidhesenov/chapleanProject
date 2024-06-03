import "./search.css"
import SearchIcon from '@mui/icons-material/Search';


function SearchComp() {
    return (
        <div className="searchContainer">
            <div style={{ position: 'fixed', width: '15%' }}>
                <div style={{ background: 'rgba(39, 44, 70, 1)', borderRadius: '20px', display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 10px" }}>
                    <SearchIcon style={{ color: 'white' }} />
                    <input style={{ padding: '10px 25px', background: 'rgba(39, 44, 70, 1)', border: 'none', width: '100%', color: 'w' }} placeholder="Search" type="text" />
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
        </div>
    )
}

export default SearchComp