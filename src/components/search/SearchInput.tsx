import { Button, Input } from "@nextui-org/react"
import { useSearchValue } from "./hooks"
import React, { FormEvent } from "react"
import { getUser } from "../../services/search"
import { useFetchedUser } from "../../context/fetchedUserHook"
import { MOCKED_USER } from "../../mocks/fetchedUserMock"

interface SearchInputProps {
  isInHeader?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({ isInHeader = false }) => {
  const { searchValue, handleSearchChange } = useSearchValue()
  const { setFetchedUserData } = useFetchedUser()

  const handleSearchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const userData = await getUser(searchValue)
    // setFetchedUserData(userData)
    setFetchedUserData(MOCKED_USER)
  }

  return (
    <form
      className={`search-input items-center ${
        isInHeader ? "flex" : "flex flex-col"
      }`}
      onSubmit={handleSearchUser}
    >
      <Input
        type="text"
        label="Search any Github user"
        value={searchValue}
        onChange={handleSearchChange}
        size={isInHeader ? "sm" : "md"}
        className="min-w-[250px] px-8 sm:px-0"
      />
      <Button
        type="submit"
        className={`w-1/6 ${isInHeader ? "mx-4" : "mt-8"}`}
        size="lg"
        color="primary"
      >
        Search
      </Button>
    </form>
  )
}

export default SearchInput
