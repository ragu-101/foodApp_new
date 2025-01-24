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
      console.log('remove cart:',cartItems)
      if(cartItems[itemId] > 1)
         {
            console.log(cartItems[itemId],'true')
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
         }
      else{
         console.log(itemId,'false')
         delete cartItems[itemId];
         setCartItems((prev)=>({...prev}))
      }
   }

   const getTotalCartAmount = () =>{
      let totalAmount = 0;
      // console.log('cart data: ',cartItems);
      for(const item in cartItems){
         if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
         }
      }
      return totalAmount;
   }

   

    const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
   }
   
   // useEffect(()=>{
   //    console.log("cart_items : ",cartItems);
   // },[cartItems])
   return <StoreContext.Provider value={contextValue}>
      {children}
   </StoreContext.Provider>
}

export default StoreContextProvider;