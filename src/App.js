import { Header } from "./AddToCart/Header"
import { Productlist } from "./AddToCart/Product"
import { useState } from "react"
import { CartList } from "./AddToCart/CartList"

function App(){
  const [product, setProduct] = useState([
    {
      image : "./pics/7-up.jpg",
      name: '7-Up',
      category: '2-Litre',
      mrp: 100,
      price: 95
    },
    {
      image : "./pics/coca-cola.jpg",
      name: 'Coca-Cola',
      category: '2-Litre',
      mrp: 95,
      price: 90
    },
    {
      image : "./pics/fanta.jpg",
      name: 'Fanta',
      category: '1-Litre',
      mrp: 80,
      price: 75
    },
    {
      image : "./pics/bovonto.jpg",
      name: 'Bovonto',
      category: '500-ml',
      mrp: 90,
      price: 80
    },
    {
      image : "./pics/sprite.jpg",
      name: 'Sprite',
      category: '2-Litre',
      mrp: 100,
      price: 95
    },
    {
      image : "./pics/slice.jpg",
      name: 'Slice',
      category: '1-Litre',
      mrp: 90,
      price: 85
    },
    {
      image : "./pics/fizz.jpg",
      name: 'Fizz',
      category: '500-ml',
      mrp: 55,
      price: 50
    },
    {
      image : "./pics/maaza.jpg",
      name: 'Maaza',
      category: '500-ml',
      mrp: 50,
      price: 45
    },
  ])

  const [cart,setcart]=useState([])
  const [showcart,setshowcart]=useState(false)
  const addToCart =(data)=>{
    setcart([...cart,{...data,quantity:1}])
  }

  const handleShow =(value)=>{
    setshowcart(value)
  }

  return ( 
    <>
    <Header count={cart.length} handleShow={handleShow}/>
    {
      showcart ? <CartList cart={cart}/> : <Productlist product={product} addToCart={addToCart}/>
    }
    </>
  )
}
export {App}