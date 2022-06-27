import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

