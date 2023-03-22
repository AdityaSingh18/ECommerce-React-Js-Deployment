import React, { useState } from 'react';


const loginContext = React.createContext({
  tokenId: '',
  isloggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
    
  const storedToken = localStorage.getItem('tokenId');
  const [token, setToken] = useState(storedToken);
  const isloggedIn = token ? true : false;

  const login = (token) => {
    console.log(token.email);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('tokenId');
    setToken(null);
  }

  const contextValue = {
    tokenId: token,
    isloggedIn: isloggedIn,
    login: login,
    logout: logout,
  };

  return (
    <loginContext.Provider value={contextValue}>
      {props.children}
    </loginContext.Provider>
  );
};

export default loginContext;