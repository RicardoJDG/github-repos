import ErrorBoundary from "../../error/errorBoundary"
import SearchInput from "../search/SearchInput"

const Home = () => {
  return (
    <div className="layout-container w-full h-full">
      <>
        <div className="home-title">Github Repositories</div>
        <ErrorBoundary>
          <SearchInput />
        </ErrorBoundary>
      </>
    </div>
  )
}

export default Home
