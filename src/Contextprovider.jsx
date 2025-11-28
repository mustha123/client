import React from 'react'
import {createContext} from 'react'

export const UserContext=createContext();

export default function Contextprovider({children}) {

    // const host='http://localhost:7000'
    const host = "https://server-mern-first.onrender.com"


  return (
    <div>
      <UserContext.Provider value={{host}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
