import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
const [cartisshown,setcartisshown] = useState(false)

const showcarthandler=()=>{
  setcartisshown(true)
}

const hidecarthandler=()=>{
  setcartisshown(false)

}

  return (
    <CartProvider>
      {   cartisshown &&  <Cart onClose ={hidecarthandler}/> } 
      <Header onshowcart = {showcarthandler}></Header>
      <main>
      <Meals></Meals>
      </main>
      </CartProvider>
    
  );
}

export default App;
