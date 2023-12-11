import Home from "./components/home-screen/Home"
import GithubProfile from "./components/profile/GithubProfile"
import { useFetchedUser } from "./context/fetchedUserHook"

function App() {
  const { fetchedUserData } = useFetchedUser()

  return !fetchedUserData ? <Home /> : <GithubProfile />
}

export default App
