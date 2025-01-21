import { createContext, useEffect, useState } from "react";
import { food_list } from "../images/others/assets";


export const  StoreContext = createContext(null);

const StoreContextProvider = ({children}) =>{
   const [cartItems,setCartItems] = useState({});
   const addToCart = (itemId) =>{
      if(!cartItems[itemId]){
         setCartItems((prev)=>({...prev,[itemId]:1}));
      }
      else{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
   }
   const removeFromCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
    const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart
   }
   
   // useEffect(()=>{
   //    console.log("cart_items : ",cartItems);
   // },[cartItems])
   return <StoreContext.Provider value={contextValue}>
      {children}
   </StoreContext.Provider>
}

export default StoreContextProvider;