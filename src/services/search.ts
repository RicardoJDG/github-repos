import { FetchedUser } from "../context/types";
import { API_URL, SUGGESTIONS_ENDPOINT, USER_ENDPOINT } from "./apiConstants";
import { UserQuery } from "./types";


/** 
 * Function to fetch specifically user suggestions
 * @param {string} searchValue pass the user's input from the search bar 
 * */
export const getSuggestions = async (searchValue: UserQuery): Promise<unknown> => {
  const searchQuery = `${SUGGESTIONS_ENDPOINT}?q=${searchValue}`

  try {
    const response = await fetch(`${API_URL}${searchQuery}`)
    const suggestions = await response.json()
    return suggestions
  } catch (error) {
    console.error(`Houston we have this problem: ${error}`)
  }
}

export const getUser = async (username: UserQuery): Promise<FetchedUser | string | undefined> => {
  const userQuery = `${USER_ENDPOINT}/${username}`

  try {
    const response = await fetch(`${API_URL}${userQuery}`)
    const userData = await response.json()
    if (response.status === 200 && userData) {
      const repoFetch = await fetch(userData.repos_url)
      const repoData = await repoFetch.json()

      const orgsFetch = await fetch(userData.organizations_url)
      const orgsData = await orgsFetch.json()

      const fetchedUserData: FetchedUser = {
        ...userData,
        repositories: repoData,
        organizations: orgsData
      }

      return fetchedUserData
    }
    return `${username} is not a valid user`
  } catch (error) {
    console.error(`Houston we have this problem: ${error}`)
  }
}