import { useState } from "react"
import SearchInput from "./components/search/SearchInput"

function App() {
  const [userData, setUserData] = useState()

  console.log(userData)
  return (
    <div className="w-full h-full layout-container">
      <div className="home-title">Github Repositories</div>
      <SearchInput onUserSearch={setUserData} />
    </div>
  )
}

export default App
