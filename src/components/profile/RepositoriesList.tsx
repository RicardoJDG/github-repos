import { Card, CardBody, CardHeader, Chip, Link } from "@nextui-org/react"
import StarIcon from "../../icons/StarIcon"
import ForkIcon from "../../icons/ForkIcon"
import SearchInput from "../search/SearchInput"
import { useFetchedUser } from "../../context/fetchedUserHook"

const mock_content = {
  name: "absurd-sql",
  html_url: "https://github.com/jlongster/absurd-sql",
  description: "sqlite3 in ur indexeddb (hopefully a better backend soon) ",
  language: "Javascript",
  forks_count: 93,
  stargazers_count: 3900
}

const RepositoriesList = () => {
  const { fetchedUserData } = useFetchedUser()
  if (typeof fetchedUserData === "string" || !fetchedUserData) {
    return
  }
  return (
    <div className="repos-column">
      <div className="sm:col-span-full self-center">
        <SearchInput isInHeader={true} />
      </div>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl col-span-full">
        {`${fetchedUserData?.name ?? fetchedUserData.login}'s repositories`}
      </h2>
      <div className="repos-cards-container">
        {fetchedUserData.repositories.map((repo) => (
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
