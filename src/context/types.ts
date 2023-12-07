export type FetchedUserContextProviderProps = {
  children: React.ReactNode
}

export interface RepositoryType {
  name: string,
  html_url: string,
  description: string,
  language: string,
  forks_count: number,
  stargazers_count: number
}

export interface OrganizationType {
  id: number
  url: string
  avatar_url: string,
  description: string,
  login: string,
}

export interface FullOrganizationType extends OrganizationType {
  name: string
}

export interface FetchedUser {
  id: number
  avatar_url: string
  bio: string
  followers: number
  following: number
  login: string
  email?: string
  name?: string
  repositories: Array<RepositoryType>
  organizations: Array<FullOrganizationType>
}

export interface SuggestionsResponse {
  total_count: number,
  incomplete_results: boolean
  items: Array<FetchedUser>
}

export interface FetchedUserContextType {
  fetchedUserData: FetchedUser | undefined
  setFetchedUserData: React.Dispatch<
    React.SetStateAction<FetchedUser | undefined>
  >
}
