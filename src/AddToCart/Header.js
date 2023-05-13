import "../App.css"

function Header(props){
    return (
        <>
        <div className="headname cartname">
            <h3 style={{cursor: 'pointer'}} onClick={()=>props.handleShow(false)}>Royal Soft Drinks</h3>
            <h3 onClick={()=>props.handleShow(true)} className="cartc">
                Cart
                <sup style={{color:'red'}}>{props.count}</sup>
            </h3>
        </div>
        </>
    )
}
export {Header} 