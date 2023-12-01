import Home from "./components/home-screen/Home"
import GithubProfile from "./components/profile/GithubProfile"
import { useFetchedUser } from "./context/fetchedUserHook"

function App() {
  const { fetchedUserData } = useFetchedUser()
  console.log("🚀 ~ file: App.tsx:7 ~ App ~ fetchedUserData:", fetchedUserData)

  return (
    <div className="w-full h-full layout-container">
      {!fetchedUserData ? <Home /> : <GithubProfile />}
    </div>
  )
}

export default App
