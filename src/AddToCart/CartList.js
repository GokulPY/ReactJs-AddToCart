import { useEffect, useState } from "react"
import "../App.css"

function CartList({cart}){
    const [CART,setCART]=useState([])
        useEffect(()=>{
            setCART(cart)
        },[cart])
    return (
        <>
        <div>
            {
            CART.map((cartitem,cartindex)=>{
                return(
                    <div className="buy">
                    <img src={cartitem.image} style={{width: '8%' , padding:"10px"}} />
                    <span className="s1">{cartitem.name} | {cartitem.category}</span>
                    <button className="b1" onClick={()=>{
                        const plus = CART.map((item,index)=>{
                            return (
                                cartindex === index ? {...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0} : item
                            )
                        })
                        setCART(plus)
                    }}>-</button>
                    <span className="s2">{cartitem.quantity}</span>
                    <button className="b2" onClick={()=>{
                        const plus = CART.map((item,index)=>{
                            return (
                                cartindex === index ? {...item, quantity : item.quantity + 1} : item
                            )
                        })
                        setCART(plus)
                    }}>+</button>
                    <span className="s3">Rs.{cartitem.price * cartitem.quantity}/-</span>
                    </div>
                )
            })
            }
            <p className="totalamount">Total Amount :
            {
                CART.map(item=>item.price*item.quantity).reduce((total,value) => total + value,0)
            }
            </p>
        </div>
        </>
    )
}
export {CartList}