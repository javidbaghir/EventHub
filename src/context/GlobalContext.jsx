import { createContext, useContext, useState } from "react";
import { allStorage } from "../utils/StorageUtils";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({children}) => {

    const [state, setState] = useState({
       storage: allStorage()
    })

    const values = {
        ...state
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useContextGlobal = () => useContext(GlobalContext)