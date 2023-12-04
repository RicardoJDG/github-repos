import { useFetchedUser } from "../../context/fetchedUserHook"
import RepositoriesList from "./RepositoriesList"
import ProfileInfo from "./ProfileInfo"

const GithubProfile = () => {
  const { fetchedUserData } = useFetchedUser()
  if (typeof fetchedUserData === "string" || !fetchedUserData) {
    return
  }
  return (
    <div className="layout-container h-full w-full">
      <>
        <ProfileInfo />
        <RepositoriesList />
      </>
    </div>
  )
}

export default GithubProfile
