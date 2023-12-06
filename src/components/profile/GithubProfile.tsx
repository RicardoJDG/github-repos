import RepositoriesList from "./RepositoriesList"
import ProfileInfo from "./ProfileInfo"

const GithubProfile = () => {
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
