import "./search.css"


function SearchComp() {
    return (
        <div className="searchContainer">
            <div>
                <div style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                    <h4 style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>On this page</h4>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Accesbility</p>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>What is Chaplean</p>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>How to use</p>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Accesbility</p>
                </div>
                <hr style={{ borderColor: '#1D9BF0' }} />
                <div style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: "20px 0px" }}>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Edit this page</p>
                    <p style={{ fontFamily: "sans-serif", color: 'gainsboro' }}>Managed Chaplean</p>
                </div>
            </div>
        </div>
    )
}

export default SearchComp