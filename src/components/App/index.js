import React, { useState } from "react";
import Routing from "../Routing";
export const CartContext = React.createContext();
export const InputContext = React.createContext();

export function App(props) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return ( 
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
        <Routing />
      </CartContext.Provider>
      </InputContext.Provider>

  );
}

export default App;
