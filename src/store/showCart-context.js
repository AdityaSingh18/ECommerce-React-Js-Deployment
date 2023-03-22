import React, { useState } from 'react';

const showCartContext = React.createContext({
  cartState: false,
  showCart: () => {},
  hideCart: () => {},
});

export const ShowCartContextProvider = (props) => {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <showCartContext.Provider
      value={{ cartState: showCart, showCart: showCartHandler, hideCart: hideCartHandler }}
    >
      {props.children}
    </showCartContext.Provider>
  );
};

export default showCartContext;
