import "../App.css"

function Productlist({product,addToCart}){
    return (
        <>
        <div className="productname">
            {
                product.map((productitem,productindex)=>{
                    return (
                        <div className="productcenter">
                            <div>
                                <img className="images" src={productitem.image}/>
                                <div className="textlist">
                                    <h2>{productitem.name} | {productitem.category}</h2>
                                    <h3 style={{textDecoration: 'line-through', color: 'red'}}>Rs.{productitem.mrp}</h3>
                                    <h2 style={{color: 'blue'}}>Rs.{productitem.price}/-</h2>
                                    <button className="ATC" onClick={()=>addToCart(productitem)}>Add To Cart</button>
                                </div>    
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export {Productlist}