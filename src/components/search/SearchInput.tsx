import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
  useDisclosure
} from "@nextui-org/react"
import { useSearchValue } from "./hooks"
import React, { FormEvent } from "react"
import { getUser } from "../../services/search"
import { useFetchedUser } from "../../context/fetchedUserHook"
import ModalProfile from "../profile/ModalProfile"

interface SearchInputProps {
  isInHeader?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({ isInHeader = false }) => {
  const { searchValue, handleSearchChange, resetInput, suggestions } =
    useSearchValue()
  const { fetchedUserData, setFetchedUserData } = useFetchedUser()
  const { onOpen, isOpen, onClose } = useDisclosure()

  const handleSearchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = await getUser(searchValue)
    setFetchedUserData(userData)
    resetInput()
  }

  return (
    <>
      <form
        className={`search-input items-center ${
          isInHeader ? "flex" : "flex flex-col"
        }`}
        onSubmit={handleSearchUser}
      >
        {fetchedUserData &&
          typeof fetchedUserData !== "string" &&
          isInHeader && (
            <Avatar
              src={fetchedUserData.avatar_url}
              isBordered
              isFocusable
              className="sm:hidden block cursor-pointer"
              onClick={onOpen}
            />
          )}
        <Autocomplete
          label="Search any Github user"
          className="min-w-[250px] sm:px-0 px-4"
          inputValue={searchValue}
          onInputChange={handleSearchChange}
          items={suggestions}
        >
          {(item) => (
            <AutocompleteItem key={item.id}>{item.login}</AutocompleteItem>
          )}
        </Autocomplete>
        <Button
          type="submit"
          className={`w-1/6 ${isInHeader ? "mx-4" : "mt-8"}`}
          size="lg"
          color="primary"
        >
          Search
        </Button>
      </form>
      <ModalProfile isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default SearchInput
