export type FetchedUserContextProviderProps = {
  children: React.ReactNode
}

export interface FetchedUser {
  avatar_url: string
  bio: string
  followers: number
  following: number
  login: string
  email?: string
  repos_url: Array<string>
}

export interface FetchedUserContextType {
  fetchedUserData: FetchedUser | undefined | string
  setFetchedUserData: React.Dispatch<
    React.SetStateAction<FetchedUser | undefined | string>
  >
}
