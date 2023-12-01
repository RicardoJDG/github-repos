import { useContext } from "react"
import { FetchedUserContext } from "./fetchedUserContextProvider"

export function useFetchedUser() {
  const user = useContext(FetchedUserContext)
  if (user === null) {
    throw new Error(
      "useFetchedUser must be used within a FetchedUserContextProvider"
    )
  }

  return user
}
