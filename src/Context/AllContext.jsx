import React, {createContext, useState} from 'react'

export const AllContext = createContext();

const AllContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

  return (
      <AllContext.Provider value={{isAuth,setIsAuth}}>
          {children}
    </AllContext.Provider>
  )
}

export default AllContextProvider
