import { createContext, useState } from "react"
import {
  FetchedUser,
  FetchedUserContextProviderProps,
  FetchedUserContextType
} from "./types"

export const FetchedUserContext = createContext<FetchedUserContextType | null>(
  null
)

export default function FetchedUserContextProvider({
  children
}: FetchedUserContextProviderProps) {
  const [fetchedUserData, setFetchedUserData] = useState<FetchedUser | string>()

  return (
    <FetchedUserContext.Provider
      value={{ fetchedUserData, setFetchedUserData }}
    >
      {children}
    </FetchedUserContext.Provider>
  )
}
