import { createContext, useState } from "react";

const StateContext = createContext<any>({});

export const StateProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <StateContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
