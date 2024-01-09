import { FetchedUser, FullOrganizationType, OrganizationType, RepositoryType, SuggestionsResponse } from "../context/types";
import { API_URL, SUGGESTIONS_ENDPOINT, USER_ENDPOINT } from "./apiConstants";


/** 
 * Function to fetch specifically user suggestions
 * @param {string} searchValue pass the user's input from the search bar
 * @returns {Promise<SuggestionsResponse>}
 * */
export const getSuggestions = async (searchValue: string): Promise<SuggestionsResponse | undefined> => {
  const searchQuery = `${SUGGESTIONS_ENDPOINT}?q=${searchValue}&per_page=10`

  try {
    const suggestions: SuggestionsResponse = await fetcher(`${API_URL}${searchQuery}`)
    return suggestions
  } catch (error) {
    console.info(`Houston we have this problem: ${error}`)
  }
  return
}

/** 
 * Function to fetch specifically user suggestions
 * @param {string} username pass the user's input from the search bar
 * @returns {Promise<FetchedUser | undefined>}
 * */
export const getUser = async (username: string): Promise<FetchedUser | undefined> => {
  const userQuery = `${USER_ENDPOINT}/${username}`

  try {
    const userData = await fetcher(`${API_URL}${userQuery}`)
    const repoData: RepositoryType = await fetcher(userData.repos_url)
    const orgsData: OrganizationType[] = await fetcher(userData.organizations_url)

    const orgsPromises: FullOrganizationType[] = await Promise.all(orgsData.map((org) => fetcher(org.url)))
    // @ts-expect-error the error is because the .find might return undefined, but we know that can't be the case
    const completeOrgsData: FullOrganizationType[] = orgsPromises.map((org) => { return { ...orgsData.find((incompleteOrg) => incompleteOrg.id === org.id), name: org.name } })

    const fetchedUserData: FetchedUser = {
      ...userData,
      repositories: repoData,
      organizations: completeOrgsData
    }

    return fetchedUserData
  } catch (error) {
    console.error(`Houston we have this problem: ${error}`)
  }
}

const fetcher = async (endpointUrl: string) => {
  try {
    console.log("🚀 ~ fetcher ~ import:", import.meta.env.VITE_GITHUB_TOKEN)
    const response = await fetch(endpointUrl, {
      headers: {
        'authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error(`Houston we have this problem: ${error}`)
  }
}