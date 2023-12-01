import { Input } from "@nextui-org/react"
import { useSearchValue } from "./hooks"
import React, { FormEvent } from "react"
import { getUser } from "../../services/search"

interface SearchInputProps {
  onUserSearch: React.Dispatch<React.SetStateAction<undefined>>
}

const SearchInput: React.FC<SearchInputProps> = ({
  onUserSearch: setUserData
}) => {
  const { searchValue, handleSearchChange } = useSearchValue()

  const handleSearchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = await getUser(searchValue)
    setUserData(userData)
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
