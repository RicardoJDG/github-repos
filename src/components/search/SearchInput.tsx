import { Input } from "@nextui-org/react"
import { useSearchValue } from "./hooks"
import { FormEvent } from "react"
import { getUser } from "../../services/search"
import { useFetchedUser } from "../../context/fetchedUserHook"

const SearchInput = () => {
  const { searchValue, handleSearchChange } = useSearchValue()
  const { setFetchedUserData } = useFetchedUser()

  const handleSearchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = await getUser(searchValue)
    setFetchedUserData(userData)
  }

  return (
    <form className="search-input" onSubmit={handleSearchUser}>
      <Input
        type="text"
        label="Search any Github user"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </form>
  )
}

export default SearchInput
