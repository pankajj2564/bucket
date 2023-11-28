'use client'

import {createContext, useReducer} from 'react'

export const AppContext = createContext({})

export default function AppProvider({children}: any) {

    const [state, dispatch] = useReducer((prevState: any, action: any) => ({
        ...prevState,
        ...action
    }), {})

    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
}