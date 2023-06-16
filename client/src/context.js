import React, { createContext, useContext, useEffect, useState } from 'react'
const AppContext = createContext();
const Context = ({ children }) => {
    const [state,SetState] = useState(true);
    
    // console.log(item);
    
    return (
        <>
            <AppContext.Provider value={{state,SetState}}>
                {children}
            </AppContext.Provider>
        </>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, Context, useGlobalContext }