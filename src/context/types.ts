export type FetchedUserContextProviderProps = {
  children: React.ReactNode
}

interface RepositoryType {
  name: string,
  html_url: string,
  description: string,
  language: string,
  forks_count: number,
  stargazers_count: number
}

interface OrganizationType {
  avatar_url: string,
  description: string,
  login: string,
}
export interface FetchedUser {
  avatar_url: string
  bio: string
  followers: number
  following: number
  login: string
  email?: string
  name?: string
  repositories: Array<RepositoryType>
  organizations: Array<OrganizationType>
}

export interface FetchedUserContextType {
  fetchedUserData: FetchedUser | undefined | string
  setFetchedUserData: React.Dispatch<
    React.SetStateAction<FetchedUser | undefined | string>
  >
}