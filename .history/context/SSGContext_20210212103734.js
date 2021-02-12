import { useContext, createContext, useState } from 'react'

const SSGContext = createContext()

export function ProvideSSG({ children }) {
  const auth = useProvideSSG()
  return <SSGContext.Provider value={auth}>{children}</SSGContext.Provider>
}

export const useSSG = () => {
  return useContext(SSGContext)
}

function useProvideSSG () {

    const [appData, setAppData] = useState(null)

    return {
        appData,
        setAppData
    }
}
