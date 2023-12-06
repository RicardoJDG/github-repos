import { FetchedUser, SuggestionsResponse } from "../context/types";
import { API_URL, SUGGESTIONS_ENDPOINT, USER_ENDPOINT } from "./apiConstants";


/** 
 * Function to fetch specifically user suggestions
 * @param {string} searchValue pass the user's input from the search bar
 * @returns {Promise<SuggestionsResponse>}
 * */
export const getSuggestions = async (searchValue: string): Promise<SuggestionsResponse | undefined> => {
  const searchQuery = `${SUGGESTIONS_ENDPOINT}?q=${searchValue}`

  try {
    const response = await fetch(`${API_URL}${searchQuery}`, {
      headers: {
        'authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })
    const suggestions: SuggestionsResponse = await response.json()
    return suggestions
  } catch (error) {
    console.error(`Houston we have this problem: ${error}`)
  }
  return
}

/** 
 * Function to fetch specifically user suggestions
 * @param {string} username pass the user's input from the search bar
 * @returns {Promise<FetchedUser | string | undefined>}
 * */
export const getUser = async (username: string): Promise<FetchedUser | string | undefined> => {
  const userQuery = `${USER_ENDPOINT}/${username}&per_page=10`

  try {
    const response = await fetch(`${API_URL}${userQuery}`, {
      headers: {
        'authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })
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

// Maybe add getUtilities?