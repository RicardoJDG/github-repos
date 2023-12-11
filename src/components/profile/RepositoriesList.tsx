import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Link
} from "@nextui-org/react"
import StarIcon from "../../icons/StarIcon"
import ForkIcon from "../../icons/ForkIcon"
import SearchInput from "../search/SearchInput"
import { useFetchedUser } from "../../context/fetchedUserHook"
import ErrorBoundary from "../../error/errorBoundary"
import { useFilter } from "./hooks"

const RepositoriesList = () => {
  const { fetchedUserData } = useFetchedUser()
  const { repositories } = fetchedUserData ?? {}
  const { filterValue, handleFilterChange, filteredRepositories, clearFilter } =
    useFilter(repositories)

  if (!fetchedUserData) {
    return
  }

  return (
    <div className="repos-column">
      <div className="sm:col-span-full">
        <ErrorBoundary>
          <SearchInput isInHeader={true} />
        </ErrorBoundary>
      </div>
      <div className="items-center gap-4 sm:justify-between flex flex-col sm:flex-row">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl col-span-full">
          {`${fetchedUserData?.name ?? fetchedUserData.login}'s repositories`}
        </h2>
        <Input
          size="sm"
          type="text"
          label="Filter"
          placeholder="Filter by name or programming language"
          onChange={handleFilterChange}
          value={filterValue}
          isClearable
          onClear={() => clearFilter()}
          className="w-1/2 sm:w-1/4"
        />
      </div>
      <div className="repos-cards-container">
        {filteredRepositories &&
          filteredRepositories.map((repo) => (
            <Card className="h-full min-h-[180px] max-h-[200px]">
              <CardHeader>
                <Link href={repo.html_url} className="text-3xl" target="_blank">
                  {repo.name}
                </Link>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col justify-between h-full ">
                  <p>{repo.description}</p>
                  <div className="flex py-4 gap-4 items-center">
                    <Chip>{repo.language}</Chip>
                    <span className="flex gap-2">
                      <StarIcon className="w-5 h-5" />
                      <p>{repo.stargazers_count}</p>
                    </span>
                    <span className="flex gap-2">
                      <ForkIcon className="w-6 h-6" />
                      <p>{repo.forks_count}</p>
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default RepositoriesList
