import { createContext, useContext, useState } from "react";
import { allStorage } from "../utils/StorageUtils";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState({
    errors: {},
    storage: allStorage(),
  });

  const handleState = (name, payLoad) => {
    setState((old) => ({
      ...old,
      [name]: payLoad,
    }));
  };
  const values = {
    ...state,
    handleState,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export const useContextGlobal = () => useContext(GlobalContext);